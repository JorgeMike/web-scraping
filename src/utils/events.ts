import { Page } from 'playwright';

const wait_random_time = async (page: Page) => {
    const randomWaitTime =
        Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
    await page.waitForTimeout(randomWaitTime);
};

const mouse_move = async (page: Page) => {
    for (let i = 0; i < 5; i++) {
        const x = Math.floor(Math.random() * 800);
        const y = Math.floor(Math.random() * 600);
        await page.mouse.move(x, y);
        await page.waitForTimeout(1000);
    }
};

const scroll_move = async (page: Page) => {
    for (let i = 0; i < 5; i++) {
        const scrollAmount = Math.floor(Math.random() * 1000);
        await page.mouse.wheel(0, scrollAmount);
        await page.waitForTimeout(1000);
    }
};

export { mouse_move, scroll_move, wait_random_time };
