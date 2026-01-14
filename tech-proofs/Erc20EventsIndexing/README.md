# ERC-20 Events Indexing

This technical proof aims to evaluate the candidate's skills in designing and implementing a software system that retrieves event information for an ERC-20 token on an EVM chain.

## To the Candidate

Welcome to the technical test of 57Blocks.

We suggest you use any language that is most comfortable and suitable for the task. Please keep in mind that AI assistance is allowed.

The most relevant item evaluated will be the satisfactory compliance with the requirements list. The implementation will be evaluated by the 57Blocks team in a live coding session.

## Resources

 - The ABI of the contract is located in the file 'abi/erc20.json
 - Suggested asset:
 - Suggested chain:

## Requirements

The following list of requirements is split into functional and non-functional requirements. We do not expect you to satisfy all the items; however, we suggest you focus on the items marked with ( * ) since they are more relevant to the team.

### Functional Requirements

1. Transfer events
    1. *Fetch* (*) the transfer events from the blockchain into memory
    2. *Persist* the event information in storage

### Non-Functional Requirements

1. *Resilience* (*) The system should be able to continue operating even if there is an error on one event.
2. *Recovery* (*) The system should be able to index events even when the system was offline.
3. *Parallelism* The system should be able to handle events in parallel. In other words, the system should be able to scale horizontally.
