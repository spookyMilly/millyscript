# Hi! Welcome to my personal website on GitHub. :teddy_bear:

## Introduction
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
I decided to use Next version `14.2.18` for a more stable experience as there still seem to be some minor issues with next version 15.
It is best used with node version `20.9.0`. You can use _nvm_ (`.nvmrc`) as your version manager.

## Deployed on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb2276f6-78cf-40ba-9f69-78ff2eb8997f/deploy-status)](https://app.netlify.com/sites/millyscript/deploys)

I decided to use [Netlify](https://netlify.com/) to deploy my website, but [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) would also have been an option.
They both are time-saving, budget-friendly (for small websites), straightforward and easy to manage.

## :speech_balloon: Thoughts on best practices
An overview of my thoughts on how to write clean frontends! :)

## Using prettier and ESLint
I added some custom rules to my `.prettierrc.json` and `.eslintrc.json` files and recommend Husky to check before each commit if no rules have been broken.

### Sorting imports
I prefer to sort my imports with `eslint-plugin-simple-import-sort` to clean up the code. You can run the following command to do it automatically:

```bash
npx eslint . --fix
```

### :nail_care: Styling

I like to use modular SCSS files for styling to keep a clean structure and avoid side effects in the future. 
Page contents are wrapped inside `layout` component to make sure that all pages look similar.
SCSS-classes are written in _camelCase_. This keeps it easy for when doing a search, you can easily separate scss classes from other code.

### Component-based architecture

General rules of thumb:

1. DRY (Don't repeat yourself)
2. Components can be re-usable, but don't have to be if they are used for special feature cases
3. Keep it simple (don't create too complex components with too many props)

### How to keep the code easy to read

Name each variable exactly after what their purpose is. No use of abbreviations such as `i` or `a`! 
Same goes for functions, components, anything. If it's going to be a long name, so be it. The code should resemble like reading a story.

### Trunk based development

I love to do trunk based development (if possible). For critical changes, feature branches are an option as well of course.

Before merging to main, I like to rebase/merge the main branch into my branch.

General rules of thumb I like to go by:
-   One commit for every task (don't mix multiple logical features). This is better for the commit history and easier for
    reviewers to see what you did.
-   Write meaningful commit messages (not just "Fix bug")
-   [What is Trunk Base Development](https://www.split.io/glossary/trunk-based-development/)
-   [How to perform Trunk Base Development](https://sdqweb.ipd.kit.edu/wiki/Git_pull_--rebase_vs._--merge)

Also, basically: Make sure your build and tests work, so it won't destroy the pipeline :)

### :writing_hand: Commit messages

Example for a nice commit message:

```
Bugfix: Add more padding to table to prevent overflowing the parent container
```

The type of commit can be a bugfix, a refactor, an update, a new feature, etc., if it's a bug fix, it is really useful to explain which bug was resolved and how! 
This is extremely helpful for large and ongoing projects as sometimes issues then can be solved faster by just checking how a problem was fixed in the past.

I recommend [this guide](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) for writing precise commit messages.

### Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load the Google font "Playfair Display" as well as "Bodoni Moda" as variable fonts.

### To dos
There are some things I would like to improve on my website:

- Use translated title and description tags for each page
- Create a dark and light theme
- Improve overall responsiveness 
- Re-design with a mock-up and better, consistent design language 
- Filter by technology functionality on my project page