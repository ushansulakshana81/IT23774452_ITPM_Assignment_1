# IT23774452_ITPM_Assignment_1
IT23774452_ITPM_Assignment_1


# Singlish-to-Sinhala Translator – Playwright Test Automation

## Test Coverage

### Positive Test Scenarios (24 cases)
The positive test suite validates correct behavior for:
- Interrogative and imperative sentence forms
- Positive and negative sentence structures
- Greetings, requests, and responses
- Polite vs informal phrasing
- Daily expressions
- Multi-word expressions and collocations
- Joined vs segmented word variations
- Tenses (past, present, future)
- Pronoun and singular/plural usage
- Embedded English technical terms
- Abbreviations, punctuation, dates, times, currency
- Multi-line and paragraph inputs (>300 characters)
- Currency and numbers

### Negative Test Scenarios (10 cases)
The negative test suite validates system behavior under invalid or unexpected inputs such as:
- Mixed scripts (Latin + Sinhala)
- Misspelled and mismatched phonetic inputs
- Unsupported characters and symbols
- Emojis and excessive punctuation
- Incorrect casing and spacing
- Ambiguous or malformed sentence structures

# What you need

- **Node.js** (v16 or later recommended)
- **npm** (comes with Node.js)
- A modern web browser (Chrome/ Mozilla firefox)

# Instructions - installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ushansulakshana81/IT23774452_ITPM_Assignment_1.git

2.  Navigate to the project directory:

cd *project name*

3.  Install dependencies:

npm install

4.  Install Playwright browsers:

npx playwright install

# Instructions - run

run all tests - npx playwright test

run in headed mode - npx playwright test --headed

run in ui mode - npx playwright test --ui

run a specific test file - npx playwright test tests/positive.spec.js

# To view the report:

npx playwright show-report
