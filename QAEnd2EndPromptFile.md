# **End-to-End QA Workflow Using Natural Language**

## **Workflow Overview**

This workflow guides you through a complete AI-assisted QA process using MCP servers and specialized agents. The objective is to transform a user story into validated, production-ready Playwright automation scripts by progressing through each stage in sequence.

---

# **🎯 STEP 1: Analyze the User Story**

### **Prompt**

I am starting a new testing workflow.

Please read the user story located at:

user-stories/SCRUM-101-checkout-test-report.md

Review the entire document and identify:

* The primary business requirements  
* Functional requirements  
* Acceptance criteria  
* Overall testing scope

Prepare a concise summary that clearly explains what needs to be tested.

### **Expected Output**

* Summary of the user story  
* Complete list of acceptance criteria  
* Application URL (if available)  
* Test credentials (if available)  
* Major features and workflows that require testing

---

# **📝 STEP 2: Build the Test Plan**

### **Prompt**

Using the user story reviewed in the previous step, utilize the **Playwright Test Planner** agent to generate a comprehensive test plan.

The agent should:

1. Extract the application URL and any available login credentials.  
2. Explore the application to understand every workflow described in the acceptance criteria.  
3. Produce a detailed test plan covering all required scenarios, including:  
   * Happy path scenarios  
   * Negative test cases (validation failures, empty fields, invalid inputs)  
   * Edge cases and boundary conditions  
   * Navigation flow verification  
   * UI element validation  
4. Save the completed test plan as:

specs/saucedemo-checkout-test-plan.md

Each test scenario should contain:

* Clear test case title  
* Detailed execution steps  
* Expected outcome for every step  
* Required test data

### **Expected Output**

* Complete test plan stored in the `specs/` directory  
* Well-organized test scenarios  
* Browser exploration screenshots if required

---

# **🔍 STEP 3: Execute Exploratory Testing**

### **Prompt**

Next, perform manual exploratory testing using the Playwright MCP browser tools.

Read the generated test plan from:

specs/saucedemo-checkout-test-plan.md

Execute every scenario described in the document.

For each test case:

1. Use Playwright browser tools to perform the test manually.  
2. Follow every documented step exactly.  
3. Compare the expected behavior with the application’s actual behavior.  
4. Capture screenshots throughout execution, especially for important states and failures.  
5. Record all observations, including:  
   * Test execution results  
   * UI inconsistencies  
   * Unexpected application behavior  
   * Missing validations  
   * Bugs discovered  
   * Screenshot evidence

### **Expected Output**

* Manual execution report  
* Screenshots captured during testing  
* List of observations and findings  
* Issues identified during exploratory testing

---

Below is a **faithful paraphrase** of the remaining screenshots (Steps 4 and 5), preserving the structure, intent, and workflow while using original wording.

---

# **🤖 STEP 4: Generate Automation Scripts**

### **Prompt**

Now generate automated Playwright test scripts using the **Playwright Test Generator** agent.

Before creating the scripts, review:

1. The test plan located at:

specs/saucedemo-checkout-test-plan.md

2. The exploratory testing results produced in **Step 3**, including:  
   * Verified element locators  
   * Successful selector strategies  
   * UI observations and application behavior

Use the knowledge gathered during exploratory testing to:

* Reuse selectors and locators that proved reliable during manual testing.  
* Prefer stable element attributes such as IDs, data attributes, roles, and other dependable properties.  
* Incorporate wait strategies based on actual application behavior rather than arbitrary delays.  
* Account for any UI quirks or workarounds discovered while exploring the application.

Generate Playwright JavaScript automation by:

1. Creating one or more scripts for every scenario defined in the test plan.  
2. Organizing the scripts into the appropriate test suite directory:

tests/saucedemo-checkout/

3. Keeping test names and execution flow aligned with the test plan.  
4. Using the validated selectors and interaction strategies identified during exploratory testing.

### **Requirements**

Every generated script should:

* Follow Playwright best practices.  
* Include appropriate assertions using `expect()`.  
* Use descriptive test names consistent with the test plan.  
* Prefer selectors verified during exploratory testing.  
* Include comments for complex or non-obvious steps.  
* Apply reliable wait strategies based on actual application behavior.  
* Use suitable test hooks such as `beforeEach()` and `afterEach()` where appropriate.  
* Support execution across multiple browsers (Chrome, Firefox, and Safari).

After generating the scripts, execute the test suite once to confirm that all generated tests run successfully.

### **Expected Output**

* Test suite files created under:

tests/saucedemo-checkout/

* Scripts built from the approved test plan.  
* Selectors derived from exploratory testing.  
* Playwright best practices consistently followed.  
* Initial version of the automation suite completed.

---

# **🔧 STEP 5: Execute and Heal Automation Tests**

### **Prompt**

Run the generated Playwright automation suite and use the **Playwright Test Healer** agent to automatically resolve any failing tests.

The workflow should be:

1. Execute every automation script inside:

tests/saucedemo-checkout/

2. Identify all failing test cases.  
3. For each failure, allow the Test Healer agent to:  
* Analyze the cause of failure (selector issues, timing problems, assertion failures, etc.).  
* Apply automatic fixes where possible by:  
  * Updating selectors  
  * Improving synchronization or wait logic  
  * Adjusting assertions when appropriate  
4. Update the affected test scripts with the applied fixes.  
5. Re-run the healed tests to verify that they now pass.  
6. Continue this execute → heal → re-run cycle until all tests are stable or no further automatic healing is possible.

Record the following information throughout the process:

* Initial execution results (pass/fail summary)  
* Healing actions performed  
* Final execution results after healing  
* Tests that could not be automatically repaired

### **Expected Output**

* Complete execution of the automation suite.  
* Identification of failing tests.  
* Updated test scripts containing applied fixes.  
* Stable execution results after healing.  
* Summary of all healing actions performed.

---

Below is the same style of **faithful paraphrase** (not a verbatim transcription) for the remaining screenshots covering **Step 6** and **Step 7**.

---

# **📊 STEP 6: Create Test Execution Report**

### **Prompt**

Now prepare a comprehensive test execution report that combines the outcomes from manual testing, automated testing, and the automated healing process.

Gather information from:

* **Step 3:** Manual exploratory testing results  
* **Step 4:** Generated Playwright automation scripts  
* **Step 5:** Automation execution and self-healing results

Save the completed report as:

test-results/saucedemo-checkout-test-report.md

The report should contain the following sections.

---

## **1\. Executive Summary**

Provide a high-level overview including:

* Total number of planned test cases  
* Total test cases executed (manual \+ automated)  
* Overall execution status (Pass / Fail / Blocked)

---

## **2\. Manual Testing Results**

Summarize the findings from exploratory testing, including:

* Results collected during Step 3  
* Screenshots and notable observations  
* Defects or issues identified during manual execution

---

## **3\. Automated Testing Results**

Summarize the automation execution, including:

* Initial automation execution results  
* Self-healing actions performed  
* Final execution results after healing  
* Overall execution summary  
* Pass/Fail statistics for each test suite

---

## **4\. Defect Log**

For every failed test (manual or automated), document:

* Bug ID  
* Severity (Critical / High / Medium / Low)  
* Title and description  
* Steps to reproduce  
* Expected behavior  
* Actual behavior  
* Supporting screenshots or evidence  
* Environment details

---

## **5\. Test Coverage Analysis**

Evaluate overall coverage by documenting:

* Which acceptance criteria have been tested  
* Manual versus automated test coverage  
* Any uncovered functionality or coverage gaps  
* Recommendations for additional testing

---

## **6\. Summary and Recommendations**

Provide a final assessment including:

* Overall quality evaluation  
* Key risks identified  
* Recommended next steps

---

### **Expected Output**

The final report should include:

* A complete execution report covering manual and automated testing  
* Clear PASS/FAIL status for every executed scenario  
* Detailed defect reports where applicable  
* Test coverage analysis  
* Supporting screenshots and evidence

---

# **🚀 STEP 7: Commit Project to Git Repository**

### **Prompt**

Now commit all generated QA artifacts to the Git repository using the GitHub MCP server.

Git Repository URL:
https://github.com/simran0320/QA_Agent_Automated_Workflow.git

Perform the following Git operations.

---

## **1\. Initialize Repository**

If the workspace has not already been initialized as a Git repository, initialize it.

---

## **2\. Stage Changes**

Stage every new and modified file in the workspace.

This should include items such as:

* User story documentation  
* Test plan  
* Exploratory testing results  
* Automation scripts  
* Test execution report  
* Supporting assets

---

## **3\. Create Commit**

Create a descriptive commit with the message

“feat(tests): add complete automated checkout test suite for SCRUM-101 checkout workflow

* Added user story documentation  
* Added comprehensive test plan  
* Added execution report with testing results  
* Added Playwright automation scripts  
* Included validation, navigation, and edge-case coverage

Resolves SCRUM-101”

---

## **4\. Push Changes**

Push all committed changes to the configured remote Git repository.

---

## **5\. Provide a Summary**

After the push completes, generate a summary that includes:

* Files committed  
* Commit message used  
* Confirmation that the push succeeded  
* Brief overview of the changes included in the commit

---

### **Expected Output**

* All project artifacts successfully committed  
* Descriptive commit following Conventional Commit guidelines  
* Successful push to the specified Git repository  
* Summary of committed changes

---

Below is the **faithful paraphrase** of the **Complete Workflow Execution** section shown in the screenshots. It preserves the structure and intent while using fresh wording.

---

# **🎯 Complete Workflow Execution**

## **Unified End-to-End Prompt (Demo Workflow)**

I want to execute a complete AI-assisted QA workflow using natural language instructions and MCP-enabled agents.

Proceed through each phase sequentially, ensuring every stage is completed successfully before moving to the next.

---

## **STEP 1 — Analyze the User Story**

Begin by reading the user story located at:

user-stories/\<feature-name\>.md

Review the business requirements, acceptance criteria, and testing scope.

Produce a concise summary describing:

* What the feature does  
* What needs to be tested  
* Key workflows  
* Acceptance criteria  
* Application URL and credentials (if available)

---

## **STEP 2 — Create a Comprehensive Test Plan**

Use the **Playwright Test Planner** agent to generate a detailed test plan based on the user story.

The planner should:

* Explore the application using the supplied URL.  
* Understand every business workflow.  
* Cover all acceptance criteria.  
* Include happy-path scenarios.  
* Include negative tests.  
* Include validation tests.  
* Include edge and boundary cases.  
* Include navigation testing.  
* Include UI verification.

Save the generated plan as:

specs/\<feature-name\>-test-plan.md

---

## **STEP 3 — Perform Exploratory Testing**

Read the generated test plan.

Using the Playwright browser tools:

* Execute every scenario manually.  
* Follow each documented test step.  
* Capture screenshots during execution.  
* Record observations.  
* Note UI inconsistencies.  
* Report bugs or unexpected behavior.

Document all findings before continuing.

---

## **STEP 4 — Generate Automation Scripts**

Review:

* The approved test plan.  
* Results gathered during exploratory testing.

Use the **Playwright Test Generator** agent to create JavaScript Playwright automation that:

* Reuses verified selectors.  
* Uses information gathered during manual testing.  
* Produces reliable automation scripts.  
* Organizes the scripts inside:

tests/\<feature-name\>/

---

## **STEP 5 — Execute and Heal Tests**

Run every generated automation script.

Use the **Playwright Test Healer** agent to:

* Detect failing tests.  
* Diagnose failures.  
* Automatically repair selector, synchronization, or assertion issues.  
* Re-run the suite after applying fixes.  
* Continue healing until the suite becomes stable or no further automatic fixes are possible.

Record every healing activity performed.

---

## **STEP 6 — Create the Test Execution Report**

Generate a comprehensive report and save it as:

test-results/\<feature-name\>-test-report.md

The report should consolidate:

* Manual exploratory testing results  
* Generated automation details  
* Automation execution results  
* Healing activities  
* PASS/FAIL summary  
* Defect log  
* Test coverage analysis  
* Recommendations

---

## **STEP 7 — Commit All Deliverables to Git**

Use the GitHub MCP agent to commit all generated QA artifacts to the repository.

The workflow should:

* Initialize Git if required.  
* Stage all new and modified files.  
* Create a descriptive Conventional Commit message.  
* Push the commit to the remote repository.  
* Provide a summary of the committed changes.

---

## **Final Instruction**

Execute this complete workflow from beginning to end.

After finishing each phase:

* Report the current progress.  
* Summarize what was completed.  
* Highlight any issues encountered.  
* Explain any assumptions made.  
* Continue automatically to the next phase unless user intervention is required.

The workflow is considered complete only after:

* The user story has been analyzed.  
* A complete test plan has been generated.  
* Exploratory testing has been performed.  
* Playwright automation has been created.  
* All tests have been executed and healed where necessary.  
* A comprehensive execution report has been produced.  
* All project artifacts have been committed and pushed to the Git repository.

Return a final summary describing everything that was accomplished during the end-to-end QA workflow.

