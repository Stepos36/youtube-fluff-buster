// ==UserScript==
// @name         YouTube Fluff Buster
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Removes YouTube Playables, Shorts shelf from feed, Shorts button from mini guide and sidebar
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/yourusername/youtube-fluff-buster
// @supportURL   https://github.com/yourusername/youtube-fluff-buster/issues
// ==/UserScript==

(function () {
    'use strict';

    // Remove YouTube Playables section
    function removePlayables() {
        document.querySelectorAll('ytd-rich-shelf-renderer').forEach(shelf => {
            const title = shelf.querySelector('#title')?.textContent?.trim().toLowerCase();
            if (title === 'youtube playables') {
                shelf.closest('ytd-rich-section-renderer')?.remove();
            }
        });
    }

    // Remove Shorts button from mini guide (top left)
    function removeMiniGuideShorts() {
        const buttons = document.querySelectorAll('ytd-mini-guide-entry-renderer');
        buttons.forEach(btn => {
            const label = btn.getAttribute('aria-label')?.toLowerCase();
            const text = btn.innerText?.trim().toLowerCase();
            const link = btn.querySelector('a')?.getAttribute('href');
            if (
                (text === 'shorts') ||
                (label && label.includes('shorts')) ||
                (link && link.startsWith('/shorts'))
            ) {
                btn.style.display = 'none';
            }
        });
    }

    // Remove Shorts button from sidebar
    function removeSidebarShorts() {
        const buttons = document.querySelectorAll('ytd-guide-entry-renderer');
        buttons.forEach(btn => {
            const titleElement = btn.querySelector('yt-formatted-string.title');
            const title = titleElement?.textContent?.trim().toLowerCase();
            if (title === 'shorts') {
                btn.style.display = 'none';
            }
        });
    }

    // Remove Shorts shelf from homepage feed
    function removeShortsShelf() {
        document.querySelectorAll('ytd-rich-shelf-renderer').forEach(shelf => {
            const titleElement = shelf.querySelector('#title');
            const title = titleElement?.textContent?.trim().toLowerCase();
            if (title === 'shorts') {
                shelf.closest('ytd-rich-section-renderer')?.remove();
            }
        });
    }

    // Run all cleanup functions
    function runCleanup() {
        removePlayables();
        removeMiniGuideShorts();
        removeSidebarShorts();
        removeShortsShelf();
    }

    // Initial cleanup
    runCleanup();

    // Observe DOM changes
    const observer = new MutationObserver(() => {
        runCleanup();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();