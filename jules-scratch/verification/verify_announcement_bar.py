from playwright.sync_api import Page, expect
import time

def test_announcement_bar(page: Page):
    """
    This test verifies that the announcement bar is visible and not duplicated.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:3000")

    # Wait for the page to be fully loaded
    page.wait_for_load_state("networkidle")
    time.sleep(5) # Add a 5 second delay

    # 2. Assert: Check that the announcement bar is visible.
    announcement_bar = page.locator(".bg-primary.text-white")
    expect(announcement_bar).to_be_visible()

    # 3. Assert: Check that there is only one announcement bar.
    expect(announcement_bar).to_have_count(1)

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")