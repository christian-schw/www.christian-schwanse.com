---
name: User Story Template
about: Well-formatted Template for User Stories. Uses Gherkin Syntax.
title: "[FEATURE] "
labels: ''
assignees: ''

---

<br>

> [!IMPORTANT]
> Regarding 'Feature Description' and 'Acceptance Criteria':  
> Always use same syntax!!! Consistency is key.
> 
> Makes testing easier.
>
> Use Gherkin-Syntax.  
> For example:
> 
> Given [some context]  
> When [certain action is taken]  
> Then [the outcome of action is observed]
>
> Complete example at the end.

<br>

## Feature Description:
**Feature**: [feature]

**As a** [role]  
**I need** [function]  
**So that** [benefit]

**As a** [role]  
**I need** [function]  
**So that** [benefit] 

<br>
<br>

 ## Details and Assumptions:
 - [document what you know]

<br>
<br>

 ## Acceptance Criteria:
1) Acceptance Criteria / Scenario:  
```gherkin
Given code is ready to be merged
When a pull request is created
Then GitHub Actions should run linting and unit tests
And the badge should show that the build is passing
```
2) Acceptance Criteria / Scenario:  
```gherkin
Given code is ready to be merged
When a pull request is created
Then GitHub Actions should run linting and unit tests
And the badge should show that the build is passing
```

<br>
<br>

 ## Example:
 ```gherkin
Feature: The product store service back-end
    **As a** Product Store Owner
    **I need** a RESTful catalog service
    **So that** I can keep track of all my products

Background:
    Given the following products
        | name       | description     | price   | available | category   |
        | Hat        | A red fedora    | 59.95   | True      | CLOTHS     |
        | Shoes      | Blue shoes      | 120.50  | False     | CLOTHS     |
        | Big Mac    | 1/4 lb burger   | 5.99    | True      | FOOD       |
        | Sheets     | Full bed sheets | 87.00   | True      | HOUSEWARES |

Scenario: The server is running
    When I visit the "Home Page"
    Then I should see "Product Catalog Administration" in the title
    And I should not see "404 Not Found"

Scenario: Create a Product
    When I visit the "Home Page"
    And I set the "Name" to "Hammer"
    And I set the "Description" to "Claw hammer"
    And I select "True" in the "Available" dropdown
    And I select "Tools" in the "Category" dropdown
    And I set the "Price" to "34.95"
    And I press the "Create" button
    Then I should see the message "Success"
    When I copy the "Id" field
    And I press the "Clear" button
    Then the "Id" field should be empty
    And the "Name" field should be empty
    And the "Description" field should be empty
    When I paste the "Id" field
    And I press the "Retrieve" button
    Then I should see the message "Success"
    And I should see "Hammer" in the "Name" field
    And I should see "Claw hammer" in the "Description" field
    And I should see "True" in the "Available" dropdown
    And I should see "Tools" in the "Category" dropdown
    And I should see "34.95" in the "Price" field

Scenario: Read a Product
    When I visit the "Home Page"
    And I set the "Name" to "Hat"
    And I press the "Search" button
    Then I should see the message "Success"
    When I copy the "Id" field
    And I press the "Clear" button
    And I paste the "Id" field
    And I press the "Retrieve" button
    Then I should see the message "Success"
    And I should see "Hat" in the "Name" field
    And I should see "A red fedora" in the "Description" field
    And I should see "True" in the "Available" dropdown
    And I should see "Cloths" in the "Category" dropdown
    And I should see "59.95" in the "Price" field

Scenario: Update a Product
    When I visit the "Home Page"
    And I set the "Name" to "Shoes"
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "Shoes" in the "Name" field
    And I should see "Blue shoes" in the "Description" field
    And I should see "False" in the "Available" dropdown
    And I should see "Cloths" in the "Category" dropdown
    And I should see "120.50" in the "Price" field
    When I set the "Price" to "40.50"
    And I select "True" in the "Available" dropdown
    And I press the "Update" button
    Then I should see the message "Success"
    When I copy the "Id" field
    And I press the "Clear" button
    And I paste the "Id" field
    And I press the "Retrieve" button
    Then I should see the message "Success"
    And I should see "Shoes" in the "Name" field
    And I should see "Blue shoes" in the "Description" field
    And I should see "True" in the "Available" dropdown
    And I should see "Cloths" in the "Category" dropdown
    And I should see "40.50" in the "Price" field

Scenario: Delete a Product
    When I visit the "Home Page"
    And I set the "Name" to "Hat"
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "A red fedora" in the "Description" field
    When I copy the "Id" field
    And I press the "Clear" button
    And I paste the "Id" field
    And I press the "Delete" button
    And I press the "Clear" button
    And I press the "Search" button
    Then I should see the message "Success"
    And I should not see "Hat" in the results

Scenario: Listing all Products
    When I visit the "Home Page"
    And I press the "Clear" button
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "Hat" in the results
    And I should see "Shoes" in the results
    And I should see "Big Mac" in the results
    And I should see "Sheets" in the results

Scenario: Searching a Product based on Category
    When I visit the "Home Page"
    And I press the "Clear" button
    And I select "Cloths" in the "Category" dropdown
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "Hat" in the results
    And I should see "Shoes" in the results
    And I should not see "Big Mac" in the results
    And I should not see "Sheets" in the results

Scenario: Searching a Product based on Availability
    When I visit the "Home Page"
    And I press the "Clear" button
    And I select "False" in the "Available" dropdown
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "Shoes" in the results
    And I should not see "Hat" in the results
    And I should not see "Big Mac" in the results
    And I should not see "Sheets" in the results

Scenario: Searching a Product based on Name
    When I visit the "Home Page"
    And I press the "Clear" button
    And I set the "Name" to "Big Mac"
    And I press the "Search" button
    Then I should see the message "Success"
    And I should see "Big Mac" in the "Name" field
    And I should see "1/4 lb burger" in the "Description" field

and so on...
 ```
