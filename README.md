# FOSSMEC Website

A student-built website of **FOSSMEC**, the Free and Open Source Software community at Model Engineering College, Thrikkakara, made as part of trainee recruitment task.
The club's official GitHub is [github.com/FossMec](https://github.com/FossMec).

**Live site:** [fossmec-mec.github.io/fossmec-website](https://fossmec-mec.github.io/fossmec-website/)

## Idea

Open source in practice. This site is meant to be a project people can take part in, not only read about. Visitors can follow what the community is working on, suggest ideas, volunteer, and improve the website itself.

## Pages

- **Home**: introduction to FOSSMEC
- **About**: objectives and community
- **Events & Activities**: a git-log style timeline of past events
- **Gallery**: moments from the community (placeholders until real photos are added)
- **Contact**: how to reach us
- **Inside FOSSMEC**: the path from idea to event (currently a static board; a live GitHub feed is planned)
- **Contribute**: suggest an idea, volunteer or improve this site

## Design inspiration

The look is inspired by the tools open-source developers use every day: the terminal, `git log` and README files. Navigation links are styled like file paths (`~/home`), the events section reads like a commit history, and the About section is a README. Dark navy with yellow and green accents and JetBrains Mono throughout give it a terminal feel.

## Built with

Plain HTML, CSS and JavaScript. No frameworks, no build step.
Font: JetBrains Mono (Google Fonts).
Hosted on GitHub Pages.

## Run it locally

```
git clone https://github.com/fossmec-mec/fossmec-website.git
cd fossmec-website
```

Then open `index.html` in a browser. No install needed.

## Contributing

Anyone can help, including with non-code work. Open an issue to suggest an idea or fix, or send a pull request.

## Screenshots

![Desktop view](images/screenshot-desktop.png)
![Mobile view](images/screenshot-mobile.png)

## AI disclosure

**In short:** the concept, content and decisions are mine. ChatGPT and Claude helped with design exploration and with writing and debugging code, which I reviewed, edited and tested.

### What I did
- Came up with the concept, "open source in practice"
- Decided the structure and what to build or leave out, for example real empty states instead of fake demo content
- Provided all the club content: events, details, links and contact info
- Shaped the wording by picking, rejecting and rewriting taglines and copy
- Spotted problems myself (an always-empty "Done" column, repeated lines, headings hidden under the nav) and decided how to fix them
- Tested the site on desktop and phone width, integrated and edited the code, and set up the GitHub organisation, repository, licence and deployment

### AI tools used, and for what

**ChatGPT (OpenAI), the primary tool**
- Design exploration: layout, colours, typography
- Drafting content and code snippets for the core pages _(edit this line to match what really happened)_

**Claude (Anthropic)**
- Wrote the code for the Inside FOSSMEC and Contribute sections, the open-source strip, the footer and the Contact section
- Suggested GitHub Issues as the way visitors submit ideas and volunteer
- Mobile and navigation fixes, and bug spotting
- Offered wording options (I chose and edited the final text) and drafted this README

All AI output was treated as suggestions. I reviewed, adapted and tested it, and I am responsible for the final site.

## Licence

Released under the [MIT License](LICENSE).