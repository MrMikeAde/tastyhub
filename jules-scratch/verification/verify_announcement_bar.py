from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(2000) # 2 seconds delay

    # Take a screenshot of the announcement bar on desktop
    page.set_viewport_size({"width": 1280, "height": 720})
    announcement_bar_desktop = page.locator(".bg-primary.text-white").first
    announcement_bar_desktop.screenshot(path="jules-scratch/verification/desktop_view.png")

    # Take a screenshot of the announcement bar on mobile
    page.set_viewport_size({"width": 375, "height": 667})
    announcement_bar_mobile = page.locator(".bg-primary.text-white").first
    announcement_bar_mobile.screenshot(path="jules-scratch/verification/mobile_view.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)