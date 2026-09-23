---
title: "Week One Notes: Teaching Machine Learning from Zero"
date: 2026-08-02
excerpt: "My working notes from the first week of the semester — what I say, what I draw on the board, and where students usually get stuck."
tags:
  - Machine Learning
  - Teaching
---

Sharing my rough notes from week one of Foundations of Machine Learning.
Nothing polished — this is what I actually taught, in the order I taught it.

## Day 1: No maths, no code, one prediction

We start with a spreadsheet of student data and a single question: *can we
guess who will pass?*

Students make their guesses by hand. Some use one column, some invent rules
combining three. We write everyone's accuracy on the board. The best rule gets
about 78%.

Then I reveal that a simple logistic regression — which they've already
essentially built — gets 84%.

The point lands without a formula: **a model is just a rule, learned instead
of written down.**

## Day 2: The vocabulary

Four words, carefully separated, because students confuse all of them:

| Term | Plain meaning |
| --- | --- |
| Feature | What we know about the example |
| Label | What we're trying to predict |
| Training | Adjusting the rule using past examples |
| Inference | Using the rule on a new example |

We spend half the class re-labelling everyday examples — spam filters,
recommenders, medical scans — until the four words are automatic.

## Day 3: Supervised vs. everything else

My rule of thumb for the distinction:

- **Supervised:** you have an answer key.
- **Unsupervised:** you have data but no answers — you're looking for structure.
- **Reinforcement:** you have an agent, actions, and a reward signal.

Students get stuck on reinforcement until I frame it as training a pet. That
analogy has never failed me.

## Where they always get stuck

1. **Training vs. testing.** Many quietly assume the model is evaluated on the
   data it learned from. Day three always produces an audible "ohhh" when we
   hold data back.
2. **Correlation as causation.** A feature that predicts well is not a reason.
   I keep a list of absurd correlations to demonstrate this.
3. **"The model knows."** No — the model *estimates*. Language matters; I
   correct it every time.

## The one exercise I never skip

Give students a noisy dataset with a hidden pattern and 20 minutes. No code
requirement — paper is fine. The teams that draw before calculating reliably
beat the teams that start typing.

That's week one's real lesson, and it isn't about machine learning at all:

> Decide what you're looking for before you ask the computer.

Next week: linear models, and finally, a little bit of maths.
