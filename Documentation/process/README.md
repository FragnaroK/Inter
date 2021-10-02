# Shockbyte Dashboard

**INDEX**

1. [Day 1](#day-1-one---preparation)
2. [Thought Processes Documentation](#my-thought-processes)

## Day 1 (one) - Preparation

1. Analysing the project and the goal

   - Which are the requirements?

     - Full dynamic
     - API can be **unreachable** (Display **Error message**)
     - Slef-updating
       > (Should be **efficiently**)
     - Clean, secure and readable code.
     - Document thought processes
     - Consider pagination:
       > [MockAPI - Documentation](https://mockapi.io/docs)
     - Provide instructions to deply applications:
       > Can use _Docker_

   - What they are looking for?

     - Framework skill:
       > I will be using **_ANGULAR_**
     - Scalability
       > I Need more research
     - Git skills
       > I will be using **_Git_** and **_GitHub_**

   - How should I start this project?

     1. Create a _repository_ using **Git** and **GitHub**
     2. Prepare _documentation_ files
     3. **Brainstorm** about design and development tools
     4. Use **Figma** to make a draft of the _dashboard_

## My thought processes

> I'm not really sure if this is the correct way, I **never** did a _dashboard_ and _document my thought processes_ before, so... I will try to do my best.

Today, I started this test doing some _research_ about the requeriments, _thinking_ about which is the goal and how can I _meet_ this challenge (with my _current knowledge_). After that, I did a _Brainstorm_ to organize my ideas and used **_Postman_** to take a look at what kind of data I will have to handle, then I started to design with **_Figma_** the project.

I'm going to do 5 (**Five**) boxes for the _Desktop_ screen:

        1. Total Nodes
        2. Total of New Nodes
        3. Latest Node
        4. List of nodes with a preview showing the space available in each node
        5. A box in which appear details about the node clicked on the list

And, for the _Mobile_ screen:

        - The same as _Desktop_, but the details box appear overlay.

## **I will upload a folder with Figma's Prototype.**

## Day 2 (Two) - Convert designs to code

I decided to do this project in Angular, I wanted to do it in React.js but I don't have enough knowledge to do it and implement it well. (_I will try to do it after this test, surely_)

I'm thinking about two options to meet this challenge:

1. Just do the dashboard, separated in two **components**:

   - Principal Boxes with `Total Nodes`,`New Nodes` and `Last Node`
   - **Two** tables:
     - A list with all the nodes (With pagination) and a "Preview" about their stats
     - A detailed table with charts and a few more details about the node clicked

2. Separate the dasboard in a module and add Routing to the project for future updates. (_I will do this, surely_)

First, I'm going to build the structure, when I finish that I will connect it with the real API.

I'm making use of decorators `@Input()` to transport node values between components and make it more efficient, using a piece of the API data localy. Furthermore, I'm using the library **lodash** and **Moment.js** to easy access to some features/functions like:

- OrderBy(): Sort nodes by date ("up_since")
- moment(): Easy and readable way to get current date

> For the API conection and self update, I surely will be using `socket.io` to handle with this. But Today I'm going to focus in the structure, semantic and bring to life the design.

I didn't have enough time to start coding the design but I finished with showing data in the primary and secondary panel, they show:

1. Primary panel:

   - Total Nodes
   - New Nodes
   - Last Node

2. Secondary panel:

   - Showing a list of nodes with a "preview" about their details
     > node-preview and node-details are separated components

I made a pipe to transform MB to GB and have more readable data.
