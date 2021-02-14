Feature: The calculator application

    Scenario Outline: The right work arithmetic operations test
        Given Launch the url
        When Enter numbers in "<first>", "<second>"
        And Select the "<operator>"
        And Click the Go! button
        Then Expect "<result>"

        Examples:
            | first | second | operator       | result    |
            | 5     | 3      | ADDITION       | 8         |
            | 9     | 3      | DIVISION       | 3         |
            | 0,7   | 1,5    | MULTIPLICATION | 1,05      |
            | a     | 7      | SUBTRACTION    | NaN       |
            | G     | 26     | DIVISION       | NaN       |
            | -7    | 0      | DIVISION       | -Infinity |
            | 635   | 13     | MODULO         | 11        |
            |       | 2      | ADDITION       | NaN       |
            | 1     | ∞      | MULTIPLICATION | Infinity  |