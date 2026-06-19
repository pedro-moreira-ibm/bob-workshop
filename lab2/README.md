# Lab 2: Understanding, Documenting and Modifying an Existing Application with Bob

## Overview

In this lab, you'll learn how to use Bob to understand, document, and modify an existing application. Instead of building an application from scratch, you will work on a prebuilt application and use Bob to explore the codebase, identify relevant files, and implement a new feature.

This reflects a very common real-world scenario, where developers often work on existing projects rather than starting from zero.

The application used in this lab corresponds to the application developed in Lab 1.

> ⚠️ Participants who completed Lab 1 can use their own application files instead of the provided ZIP file.  
> However, some visual or structural differences may exist compared to the reference screenshots used in this guide.

## Before Starting

Make sure you have:
- IBM Bob access
- Python 3.8+
- Node.js 14+
- A terminal
- A local workspace where Bob can create files and run commands

Download the application ZIP file [here](application.zip). Place it somewhere easily accessible on your computer, such as:
- Desktop
- Documents folder
- Downloads folder

You will extract and open this project in IBM Bob during the first step of the lab.

## What You'll Learn

By the end of this lab, you will:
- ✅ Use Bob to understand an unfamiliar codebase
- ✅ Learn how Bob analyzes project structure and dependencies
- ✅ Identify which files need to be modified for a feature request
- ✅ Compare Ask Mode vs Code Mode behaviors
- ✅ Understand approval workflows and auto-approvals
- ✅ Modify an existing full-stack application


# Understanding Ask Mode vs Code Mode

This lab demonstrated an important distinction between Bob modes:

| Ask Mode | Code Mode |
|---|---|
| Understands and explains code | Modifies and generates code |
| Helps with architecture analysis | Implements features |
| Suggests implementation strategies | Executes changes |
| Ideal for learning and planning | Ideal for development |

Understanding when to use each mode is one of the key productivity gains when working with Bob.

## Lab Structure

- [Set up the project](#step-1-set-up-the-project)
- [Understanding the existing application](#step-2-understanding-the-existing-application)
- [Identifying required file changes](#step-3-identifying-required-file-changes)
- [Implementing a new feature](#step-4-implementing-a-new-feature)
- [Testing the updated application](#step-5-testing-the-updated-application)
- [Generate documentation](#step-6-generate-documentation)

---

# Step 1: Set up the project

## 1.1: Extract and open the project

Extract the provided ZIP file and open the project folder in IBM Bob.

```text
lab2-existing-app
```
<img width="3418" height="1984" alt="image" src="https://github.com/user-attachments/assets/4f3e7f4f-3c48-4403-831e-48a855736e6a" />

**✅ Checkpoint**: The project is now open in your workspace.


---

# Step 2: Understanding the existing application

## 2.1: Analyze and document the project structure

Before modifying an application, developers first need to understand:
- What the application does
- How the frontend and backend communicate
- Which files are responsible for specific features
- How the project is structured

This is where Bob becomes especially useful.

Switch to **Ask Mode** and ask Bob:

```text
Please analyze this application and explain:
1. The overall project structure
2. Which files belong to the frontend and backend
3. How the frontend communicates with the backend
4. Diagram
```

<img width="3391" height="1988" alt="image" src="https://github.com/user-attachments/assets/4cfffb99-b681-4095-8852-938b4290a2d4" />

Bob will analyze the existing codebase and help you quickly understand how the application works.

This is particularly valuable when working with:
- Large projects
- Legacy applications
- Applications created by other developers
- Unfamiliar frameworks or architectures

**✅ Checkpoint**: You now understand the structure and responsibilities of the main application files.

---

# Step 3: Identifying required file changes

## 3.1: Ask Bob which files need to change

One of Bob’s strengths is helping developers identify where changes should happen before writing code.

Still in **Ask Mode**, ask Bob:

```text
If I want to add a button that deletes all completed tasks, which files would I need to modify and how?
```

<img width="3387" height="1972" alt="image" src="https://github.com/user-attachments/assets/1990cc0f-9473-4d1d-8386-82e3e2d0fb8c" />

Bob will explain what files require changes to implement this feature. Notice that no code is being written yet — Bob is just helping you understand the implementation strategy first.

<img width="3405" height="1986" alt="image" src="https://github.com/user-attachments/assets/4b1b7560-7489-4220-a297-b98a5aada59d" />

This separation between planning and implementation is extremely important in real-world development workflows.

**✅ Checkpoint**: You understand which files are involved in the feature implementation.

---

# Step 4: Try the literate coding mode

Naturally, we could ask Bob to simply implement the new feature, specially because it already identified and planned the necessary changes.

However, let's take this opportunity to try a very interesting and useful feature in Bob: the literate coding mode.

## 4.1: Open one of the files that required changes

Open one of the files that Bob identified that required changes if we wanted to implement the new feature we suggested.

In this case, we will open the Frontend/index.html.

## 4.2: Activate the literate coding mode

Click on the literate coding mode icon, with the target file open.

<img width="3434" height="1977" alt="image" src="https://github.com/user-attachments/assets/651ed605-cdb6-42fc-b7e6-e47777658356" />

## 4.3: Make the change that Bob suggested for that file

If Bob told you the exact line where changes need to be made, select it and write what you want to implement.

If it didn't (like in this case), simply select a random line and ask Bob to implement what he suggested.

<img width="3429" height="1970" alt="image" src="https://github.com/user-attachments/assets/2fbbd2c3-27c8-443f-9f27-c9f8e828e872" />

Then Click on 'Generate'.

<img width="3370" height="1968" alt="image" src="https://github.com/user-attachments/assets/425f8a5d-2945-4545-913c-4b0b1b6675e2" />

## 4.4: Review the changes and accept them

<img width="3400" height="1977" alt="image" src="https://github.com/user-attachments/assets/fa0601e6-6b81-4e68-aa64-49383526427f" />

---

# Step 5: Finish implementing the new feature

## 5.1: Switch to Code Mode

In order to finish implementing this new feature, let's switch to **Code Mode**.

<img width="3400" height="1974" alt="image" src="https://github.com/user-attachments/assets/56230a9a-b3c7-4577-b8f8-9725ab066908" />

Unlike Ask Mode, Code Mode can:
- Modify files
- Create new code
- Refactor existing logic
- Execute commands
- Implement features directly in the project

---

## 5.2: Ask Bob to implement the feature

Ask Bob:

```text
Finish implementing a new button that deletes all completed tasks.
Modify all necessary frontend and backend files.
```


Bob will typically:
1. Analyze the existing codebase
2. Create a task plan
3. Identify the files that still need to be changed
4. Propose code modifications

This step demonstrates how Bob approaches multi-file changes in a structured way.

---

## 5.3: Reviewing Bob’s proposed changes

Before modifying files, Bob may ask for approval depending on your settings.

You will likely see:
- Proposed file changes
- Generated task lists
- Code diffs
- Approval buttons

This approval flow is important because it keeps developers in control of the generated code.

---

## 5.4: Apply the generated changes

Approve the generated changes and let Bob update the application files.

Once completed, Bob should modify:
- The frontend interface
- The frontend JavaScript logic
- The backend API endpoint
- Any necessary styling

**✅ Checkpoint**: Bob successfully updated the application files.

---

# Step 5: Testing the updated application

## 5.1: Run the application

Ask Bob to run the application again:

```bash
Run the backend application.
```

## 5.2: Open the frontend.

**For Windows Users**:

Open your application's frontend by right-clicking the `index.html` file and then selecting "Open with Live Server".

<img width="3423" height="1905" alt="image" src="https://github.com/user-attachments/assets/32e91123-8189-40b9-85f7-7fcb80f30b1f" />

<img width="3428" height="1910" alt="image" src="https://github.com/user-attachments/assets/3f0c75d7-c387-4e97-866c-6fba81726bc7" />

**For macOS Users**:

Right-click the `index.html` file and select "Reveal in Finder"

<img width="1914" height="1046" alt="image" src="https://github.com/user-attachments/assets/c61134bf-6dc1-4379-bbdb-ac1cc56fb489" />

Then just open the file in your browser of choice.

<img width="2340" height="1000" alt="image" src="https://github.com/user-attachments/assets/8ea0195b-bcb9-4b40-8b88-15086d537549" />


**✅ Checkpoint**: Frontend loads and displays the User Interface.

---

## 5.2: Test the new feature

Example test:
1. Create several tasks
2. Mark some tasks as completed
3. Click the new "Delete Completed" button
4. ✅ Completed tasks should be removed

<img width="3782" height="2053" alt="image" src="https://github.com/user-attachments/assets/8fca3fae-fc5a-4077-949e-4c9ca5b0af3c" />

If the application does not work correctly, ask Bob to:
- Analyze the issue
- Identify the root cause
- Suggest a fix
- Apply the correction

This mirrors how developers commonly use AI assistants during real debugging workflows.

---

# Step 6: Generate documentation

When working with software, it’s essential to keep everything well documented - not only for clarity, but also to ensure maintainability and make future development easier.

To achieve that, we will install a specific Bob mode specialized in writing documentation.

## 6.1: Open the Mode marketplace in Bob

Go to **Settings** and open the **Mode** tab.

<img width="3393" height="1980" alt="image" src="https://github.com/user-attachments/assets/1ad9f355-7f25-437d-9180-6e4e90cccdad" />

## 6.2: Search for the Documentation Writer mode

Search for:

```text
Documentation Writer
```

## 6.3: Install the mode

Click **Install**.

<img width="3346" height="1855" alt="image" src="https://github.com/user-attachments/assets/a7a6bfa4-d526-4221-b56a-80552e54003d" />

When prompted for the installation scope, you have 2 options:
- Select **Global** if you regularly work with documentation. The mode will be configured across all workspaces and you can reuse it in the future.
- Select **Project** if you only plan to use it for this lab. The mode will be available only for this project.


## 6.4: Switch to the Documentation Writer mode

Click on the modes tab.

<img width="3397" height="1976" alt="image" src="https://github.com/user-attachments/assets/0892c88d-c979-4e8a-a078-63e13b55f1ff" />

Select the Documentation Writer mode.

<img width="3398" height="1990" alt="image" src="https://github.com/user-attachments/assets/537de38a-04bd-4a30-86a6-18561c6dd079" />


## 6.5: Generate the documentation

Ask Bob:

```text
Generate documentation for my backend app. Do not create a new file; instead, comment directly on the code.
```

<img width="3418" height="1965" alt="image" src="https://github.com/user-attachments/assets/186b2218-2c7a-4283-bc27-5815c5dc5b6d" />

You will be able to see that comprehensive documentation was generated for the relevant file(s).

<img width="3389" height="1959" alt="image" src="https://github.com/user-attachments/assets/c6f85e32-8de2-4950-8280-55e4a0d9b40c" />


**✅ Checkpoint:** The Documentation is generated by the specialized mode is installed and activated.



# Congratulations 🎉 You’ve completed Lab 2!

You’ve successfully learned how to:
- ✅ Understand an existing application using Bob
- ✅ Analyze project structure and dependencies
- ✅ Identify files involved in a feature implementation
- ✅ Use Ask Mode for architecture understanding
- ✅ Use Code Mode for feature implementation
- ✅ Generate documentation

- ✅ Review and approve generated code changes

This workflow closely reflects how AI-assisted software development is increasingly used in real enterprise environments.
