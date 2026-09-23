---
title: "My Students Built RAG Apps — Here's What I Learned"
date: 2026-08-14
excerpt: "Retrieval-augmented generation was the final project this term. Twelve teams, four weeks, and a few lessons I didn't expect to teach."
tags:
  - Generative AI
  - LLM
  - Projects
---

The final project in my Applied Generative AI course was deliberately open:
build something that answers questions over a document collection **you**
choose. Twelve teams, four weeks. Most picked retrieval-augmented generation —
RAG — and the range of choices surprised me.

A team built a chatbot over university hostel rules. Another over pharmacology
notes. One over three years of cricket commentary, purely for fun, which
produced the best demo of the term.

## Lesson 1: Chunking is 80% of the grade

Every team's first version failed the same way. Questions that needed two
facts from different parts of a document got half an answer, confidently.

The cause was always chunking. The default splits — a fixed 500 characters,
no overlap — cut sentences in half and separated facts that belonged together.

Once teams tried different strategies — paragraph-based, heading-aware, with
overlap — answer quality jumped before they touched anything else. It's a
wonderful lesson: **the boring data step beats the clever model tweak.**

## Lesson 2: The hardest skill was writing questions

To evaluate their apps, students needed test questions with known answers. They
found this brutally difficult — harder than the code.

It forced them to think like a sceptical user:

- Which questions does the corpus *actually* answer?
- Which ones only *seem* answerable?
- How do you tell "I don't know" from a wrong guess?

By week three, every team kept a growing "questions our app fails on" list. That
list was more educational than any lecture I gave.

## Lesson 3: Evaluation before prompting

The first instinct was to endlessly tweak the prompt. I asked each team for a
fixed set of ten questions with correct answers *before* they started tuning.
Now every change had a number attached.

Two teams discovered their "improvements" made things worse. That discovery,
with evidence, was the moment the project turned from tinkering into
engineering.

## Lesson 4: Students care about honesty in answers

I expected teams to push for the flashiest demo. Instead, several chose to show
failure cases prominently — "here's where it breaks, and here's why."

One team's final slide read:

> "Our app answers 8 of 10 test questions correctly. It should say 'I don't
> know' more often than it does."

That sentence is a better outcome than a perfect score would have been.

## What I'm changing next term

1. **Week one is now evaluation, not architecture.** Test questions first,
   design second.
2. **Add a "no-RAG" baseline.** Make them prove retrieval is actually needed
   before building it.
3. **Grade the failure list.** The documented edge cases earn marks — it's the
   most honest artefact a team produces.

Four weeks, twelve teams, and I'm convinced RAG is the ideal first LLM project:
small enough to finish, deep enough to teach data quality, evaluation and
honesty in one assignment.
