# Shockbyte Dashboard

**INDEX**

1. [Day 1](#day-1-one---preparation)
   - [Notes](#my-thought-processes)
2. [Day 2](#day-2-two---convert-designs-to-code)
3. [Day 3](#day-3-three---finishing-structure-and-test-data-showing)
4. [Day 4](#day-4-four---finishing-with-design-building)

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

> I'm going to use BEM method.

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

## Day 3 (three) - Finishing structure and test data showing

I'm finishing the last table `node-details` to show detailed info about the clicked node. I'm doing some research about charts and some libraries, I find one who seems to be efficient and easy to implement.

On the other hand, in `node-details` table, I made a very simple estructure following the design:

1. **It has two sections**:

   - Ram
   - Disk

2. **The sections are divided in:**

   - Text stats: To show in plane text the details
   - Chart stats: To show in animated charts the details

---

A problem arise with the chart library, but I'm looking for a solution. **The problem is:**

- When I want to show the chart, it doesn't appear, I think it is because the variables used are initializing without any `node` because there is no node when the chart want to render, and it throw error.

**Solution progress:**

- May the best solution is verify that the node really exist before renderize the chart.
- It existed, but the problem was the library, when you set some data in the chart, you can't change it individualy. The solution(for now) was set all the data again.

---

Finished a part of the design:

- Added Header with sidebar to add new routes
- I used CSS GRID and flexbox to organize the content of the dashboard
- Table with the list almost finished, just a few details to add (like font and some effects)
- Details table data showing correctly and sync with clicks in the list of previews

Tomorrow I'm going to finish with the design and then focus in **the API and self update**

## Day 4 (four) - Finishing with design building

Design almost finished, just a few things to do like add some logos and icons.
All works perfectly, I also connected the API and it gets the data correctly.

I was experimenting with the **API** endpoint in Postman. I realize that when I want to get the data sorted by id and order desc to get the last node id (just to know how many pages it will have) **it return the wrong data**... like this:

        [
            {
                "id": "9",
                "free_ram": 44522,
                "allocated_ram": 3982,
                "free_disk": 92513,
                "allocated_disk": 8092,
                "up_since": "2020-11-05T09:15:56.990Z"
            },
            {
                "id": "8",
                "free_ram": 98731,
                "allocated_ram": 61995,
                "free_disk": 10480,
                "allocated_disk": 78095,
                "up_since": "2020-06-12T05:01:21.120Z"
            },
            {
                "id": "7",
                "free_ram": 98757,
                "allocated_ram": 29573,
                "free_disk": 5942,
                "allocated_disk": 82648,
                "up_since": "2020-07-08T15:14:38.716Z"
            },
            {
                "id": "6",
                "free_ram": 79420,
                "allocated_ram": 25182,
                "free_disk": 58168,
                "allocated_disk": 66241,
                "up_since": "2020-10-29T14:11:19.214Z"
            },
            {
                "id": "50",
                "free_ram": 53800,
                "allocated_ram": 3864,
                "free_disk": 37317,
                "allocated_disk": 49979,
                "up_since": "2020-07-26T21:04:56.969Z"
            }
        ]

And this is the request:

> https://600f10ec6c21e1001704e67a.mockapi.io/api/v1/stats?sortBy=id&order=desc&p=1&l=5

I couldn't find anything about this issue, so my solution for now is don't put pagination like:

> **< 1 - 2 - 3 - 4 - 5 - 6 >**

Just something like this:

> **< >** or **Previous - Next**

And en each click on _Next_, send a request. If there is a page, then save its content and show it, but if there isn't a page just a message about it. The request happens only if there is any changes or new content, not every time you click.

## Day 5 (five) and 6 (six) - API issues fixed & finishing project

- Dashboard.components

  - I applied "polling" method to "self-update" the dashboard every 5 minutes, I didn't use "socket.io" because I still learning about node.js and I don't know how to do it well (for now). I tried to do my best.
  - I added error notifications to improve debugging

- simple-stats.components

  - Not every box have a subtitle, but it have the tag, I wanted to do a separate component but a forget it
  - It will check for errors and let the user know when something is happening after 15 secons trying
  - I change the fonts and fixed the font-size, it will be correct in any screen

- chart.components

  - I used the library `ngx-charts` to show stats with charts and a transform data to percent with a pipe that I made
    > shared/pipes
  - Created a component to avoid repeating code and make it more readable and maintainable

- node-details.components

  - To achieve a full responsive design and functionality, in mobile screens, this table can be opened like a `side bar` clicking on any node
  - In Desktop screens, it shows nex to the nodes table
  - I used Grid and flexbox to achieve this ehaviour
  - If I have time, I will add pagination with numbers, because I solved the problem fetching pages from API

And that's all. Now I'm going to set up firebase, but **First** I'm going to push it to GitHub and when I finish with firebase, I will push again and merge:

> development -> main
