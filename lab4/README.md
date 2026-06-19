# Lab 4: Code Translation - Python to JavaScript with Bob

## Overview

In this lab, you'll use Bob to translate a Python data-processing script into an equivalent JavaScript implementation while preserving functionality and applying language-specific best practices.

This reflects a common real-world scenario where teams modernize utilities, port internal tools, or move logic between runtimes without rewriting everything manually.

## Before Starting

Make sure you have:
- IBM Bob access
- Python 3.8+
- Node.js 14+
- A terminal
- A local workspace where Bob can create files and run commands

Helpful but not required:
- Basic familiarity with Python and JavaScript


## What You'll Translate

You will translate the Python source file [`source/data_processor.py`](source/data_processor.py) into a Node.js implementation.

The Python script:
- Reads CSV files
- Performs statistical calculations
- Exports results to JSON

## What You'll Learn

By the end of this lab, you will:
- ✅ Use Ask Mode to understand the source code
- ✅ Use Plan Mode to design a translation strategy
- ✅ Use Code Mode to implement the JavaScript version
- ✅ Compare Python features with JavaScript equivalents
- ✅ Validate that both versions produce the same outcome

## Lab Structure

- [Review the Python source](#step-1-review-the-python-source)
- [Plan the translation](#step-2-plan-the-translation)
- [Implement the JavaScript version](#step-3-implement-the-javascript-version)
- [Verify and compare both versions](#step-4-verify-and-compare-both-versions)

---

# Step 1: Review the Python source

## 1.1: Download and open the lab folder in Bob

Download the lab files ZIP [here](source.zip). Extract it to a new local folder and open that extracted folder in IBM Bob before starting the exercise.

<img width="3330" height="1985" alt="image" src="https://github.com/user-attachments/assets/9d22db97-cc06-46fe-b0e3-d7ef7a3839a0" />

Review the code structure and pay attention to:
- Class-based design
- Type hints
- Context managers such as `with open(...)`
- List comprehensions
- Dictionary operations
- CSV and JSON handling

**✅ Checkpoint**: You have reviewed the Python source file.

## 1.2: Switch to Ask Mode

Change to **Ask Mode**.

<img width="3342" height="1977" alt="image" src="https://github.com/user-attachments/assets/b369b460-94be-471e-9e7d-5133f41f9d0d" />

## 1.3: Ask Bob to explain the code

Ask Bob:

```text
Analyze source/data_processor.py and explain:
1. The overall purpose of the script
2. The main classes and functions
3. Which Python-specific features are being used
4. Which parts may need special handling in JavaScript
```

<img width="3331" height="1977" alt="image" src="https://github.com/user-attachments/assets/1e31a788-ef06-4756-8336-8164a97e992b" />

Bob should identify file Input/Output, list processing, JSON export, and the `DataProcessor` class design.

**✅ Checkpoint**: You understand the Python implementation before translating it.

## 1.4: Ask about translation challenges

Still in **Ask Mode**, ask Bob:

```text
What challenges should we expect when translating source/data_processor.py from Python to JavaScript?
Consider syntax, libraries, async file handling, and type documentation.
```

Bob should highlight differences such as:
- `with open(...)` versus Node.js file and stream APIs
- `csv.DictReader` versus `csv-parser`
- Type hints versus JSDoc
- List comprehensions versus array methods

**✅ Checkpoint**: You understand the main translation challenges.

---

# Step 2: Plan the translation

## 2.1: Switch to Plan Mode

Change to **Plan Mode**.

<img width="3307" height="1979" alt="image" src="https://github.com/user-attachments/assets/ef0175a2-0ef6-4a71-aa5c-9a31780c5fb3" />

## 2.2: Create a translation mapping

Ask Bob:

```text
Create a file with the translation plan for converting source/data_processor.py to JavaScript.
Include:
1. Python-to-JavaScript feature mapping
2. Library equivalents
3. Proposed file layout in solution/
4. Any dependency recommendations
5. Validation steps after implementation
```

Bob should produce a clear mapping before any code is written.

**✅ Checkpoint**: You have a concrete translation plan.

---

# Step 3: Implement the JavaScript version

## 3.1: Switch to Code Mode

Change to **Code Mode**.

<img width="3314" height="1980" alt="image" src="https://github.com/user-attachments/assets/a5e473a6-9dd7-4da4-a1d2-1604c83ea416" />

## 3.2: Create or update the package configuration

Ask Bob:

```text
Create solution/package.json for the JavaScript translation.
Use Node.js, set data_processor.js as the entry point, and add the dependencies needed for CSV parsing.
```

**✅ Checkpoint**: The JavaScript project configuration is ready.

## 3.3: Translate the Python class

Ask Bob:

```text
Translate source/data_processor.py into solution/data_processor.js.
Include:
1. An equivalent DataProcessor class
2. Async file handling where appropriate
3. JSDoc comments
4. Error handling
5. A runnable main entry point
```

Bob should generate the translated implementation in the `solution/` folder.

<img width="3321" height="1983" alt="image" src="https://github.com/user-attachments/assets/d397b1de-24a6-4685-82e5-ec6d96ca79e2" />

**✅ Checkpoint**: The JavaScript version has been created.

## 3.4: Ask Bob to explain the translation choices

After the file is generated, switch back to **Ask Mode** and ask:

```text
Explain the key translation decisions in solution/data_processor.js.
Focus on file I/O, array transformations, error handling, and how the Python main block was mapped to Node.js.
```

This is useful because translation is not only about syntax. It is also about choosing the right runtime patterns.

**✅ Checkpoint**: You understand the translated solution, not just the generated code.

---

# Step 4: Verify and compare both versions

## 4.1: Run and compare the two versions of data_processor

Switch back to Code mode and ask Bob:

```text
Please run both versions of data_processor: python and javascript.
Compare their outputs and confirm whether both implementations create equivalent CSV-processing and JSON-export behavior.
```

Review the generated output and result files together.

<img width="3319" height="1971" alt="image" src="https://github.com/user-attachments/assets/0b34dab7-f4f5-4222-860f-0a8e95b3af66" />

**✅ Checkpoint**: Both implementations behave consistently.

---

# Congratulations 🎉 You’ve completed Lab 4!

You’ve successfully used Bob to:
- ✅ Analyze Python code
- ✅ Plan a language translation
- ✅ Generate a JavaScript implementation
- ✅ Compare behavior across runtimes
