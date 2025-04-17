import { test, expect } from '@playwright/test'

test('login flow', async ({ page }) => {
  await page.goto('/')
  await page.fill('input[data-tid="input-username"]', 'testuser')
  await page.click('button:has-text("Login")')

  await expect(page).toHaveURL('fidoo/#/welcome')
  await expect(page.locator('text=Welcome testuser@fidoo.com')).toBeVisible()
  await expect(
    page.locator('a', { hasText: 'testuser@fidoo.com' }),
  ).toBeVisible()
})
