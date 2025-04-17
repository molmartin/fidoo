import { test, expect } from '@playwright/test'

test('login and logout flow', async ({ page }) => {
  await page.goto('/')
  await page.fill('input[data-tid="input-username"]', 'testuser')
  await page.click('button:has-text("Login")')

  await expect(page).toHaveURL('fidoo/#/welcome')
  await expect(page.locator('text=Welcome, testuser@fidoo.com')).toBeVisible()
  await expect(
    page.locator('a', { hasText: 'testuser@fidoo.com' }),
  ).toBeVisible()

  const logoutLink = page.locator('button:has-text("log out")')
  await logoutLink.waitFor({ state: 'visible', timeout: 8000 })

  await logoutLink.click()

  await expect(page).toHaveURL('fidoo/#/')
})
