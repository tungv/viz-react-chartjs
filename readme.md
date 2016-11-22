class: middle

# Agenda

1. choosing visualization type
2. using react + chartjs demo

---
class: middle

# About me

1. JavaScript specialist
1. playing with JavaScript in browser since 2005
1. working with JavaScript fullstack since 2012
1. FE: sammy, knockout, angular, react (thanks god! no backbone)
1. BE: express, meteor, redis, mongo, amqp
1. Love to build web-scale apps and services

@tung_js

---
class: middle

# Choosing visualization type

Choosing chart type depends on multiple factors

1. the **purposes** of the representation (what question we're trying to answer)
2. **number** of involving **variables**
3. the **data attributes** of each variables

---
class: middle

## Purposes:

1. **a comparison**: which country has the highest population
2. **a composition**: sales by departments, traffic by sources
3. **a distribution**: number of reported bugs during Oct 2016

---
class: middle

## Understanding data attributes

1. Continuous vs Discrete
2. Dimensions vs measures

---
class: middle

## Dimensions vs measures

---
class: middle

### Measures
- a single value represents a group
- usually aggregation data (max, min, sum, avg, median)

---
class: middle

### Dimensions
- the context of measures
- grouping criteria (GROUP BY)

---
class: middle

## Continuous and Discrete

---
class: middle

### Discrete
- can only take certain values
- can be binned
- can be numeric (virtually always integer) or categorical
- example: human age, product category, week of year
- categorical values with too many possible cases => free text

---
class: middle

### Continuous
- can take any values
- real number
- example: profit, unit price
- time series with small time unit (sec, ms) => Continuous

---
class: middle

# Workshop
