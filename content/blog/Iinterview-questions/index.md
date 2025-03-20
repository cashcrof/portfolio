---
title: Interview Questions I've Messed Up (and what I probably should have answered instead)
date: "2025-03-20T22:40:32.169Z"
description: Interviewing, much like life, is a series of small embarrassments.
tags: ["job hunting", "software development"]
---

As a recent-job hunter and long-time dingus, I have fumbled my fair share of junior-level interview questions.

While I generally do well on screeners, I have also experienced the light leaving my recruiter's eyes as I desperately try to remember the advantages of GraphQL over REST. In an effort to avoid similar psychic damage in the future, I have compiled some of these questions below.

### How do you create a secure application?

This is a big, vague question. Security is truly a mishmosh of DevOps/Architecture decisions, that requires constant testing, updating, and re-testing. There is no one way to build a secure application, but there are some key concepts.

#### Authorize and Authenticate

You have to verify that the actors sending requests to your application are who they say they are. Use credentials (and roles with minimal required access) to identify who can interact with your application, and what interactions are allowed. Constantly evaluate what rights are required for which people, and make sure you are removing inactive user credentials on a regular basis. Things like SSO or 2FA make authentication more secure, and reduce the amount of data your app needs to collect.

#### Encrypt Sensitive Data

Basically what it says on the tin. Encrypting sensitive user data (passwords, SIN/SSNs, etc.) keeps your user data safe in the event of a breach. Hashing data with something like bcrypt (salty and slow) or sha256 (unsalted and _fast_) provides an extra level of security.

#### Minimal Exposure

You can't hack what you can't find! This concept applies to many different parts of development -- remove publicly exposed API endpoints, reduce the data your application collects from end users, minimize your company's OSINT data to reduce attack vectors. Phishing attacks are still common, and still effective.

### How do you approach debugging?

Apparently, the correct answer to this is not "Add a million logs and start praying".

Despite the reality of day-to-day debugging boiling down to:

    1. Add logging/breakpoints/tracing until you find the error

    2. Fix the error

This question is more about evaluating your problem-solving process. How does your brain work? What do you do if your first instinct is wrong?

#### A slightly better answer

The first priority is finding where the bug is located. If the existing logging isn't helpful, I would add additional logs to account for each step of execution. It's also worth looking into the current error-handling, to see if it should be improved to provide more information about failures. Another good approach here is adding breakpoints and stepping through the code to see the exact point of failure.

Once the bug has been located, I would look into the error information and make changes to the code/configuration as needed. Sometimes, the bug may be caused by something outside the code. In my past work, where I was responsible for updating a legacy codebase, I often ran into errors caused by issues within the existing project dependencies. In cases like this, I looked for updated/compatible versions of the same dependencies, or implemented replacements for the feature.

Finally, I would test my solution. It's important to make sure that the fix hasn't introduced any unexpected regressions or broken any current functionality. After thorough manual testing, and adding any necessary unit tests, I would push my changes to QA for testing before sending them to production.

### Why do you want to work for (insert company name here)?

I am a simple woman. I like having a job, I like paying my rent every month. More than anything, I am excited by the prospect of not starving to death.

These truisms, however, are not compelling from a hiring perspective.

Instead, the hiring manager is looking to see if you have done your due diligence, and how well you'll fit the company culture. While this may seem obvious, it's easy to flub this question if you're unprepared and under-researched. A good answer might address the following points.

#### Why is the work exciting?

Don't just say you're excited. Look at the job description -- are there any technologies that you love working with? Maybe you're really passionate about DevOps, maybe you've built a personal project with one of their frameworks. Look at the work they have done within their industry. What makes you want to be a part of it?

#### How do your values align?

Look at the company's mission. Look at their community outreach. What do they value, and why does that matter to you? If the company has an anti-crunch stance, or has shown themselves to be dedicated to employee health initiatives, let the recruiter know that it's appreciated! So often, interviewing can feel like a numbers game -- both to you, and the person hiring you. It's always nice to let your interviewer know that you can recognize the ways in which their company is unique to you.

### And that's it!

For now, at least. I might revisit this post as I screw up more interviews -- who can tell what the future holds?

If you're reading this, good luck!
