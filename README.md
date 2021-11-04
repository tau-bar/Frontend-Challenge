# Crater-Frontend-Challenge
> Welcome to the Crater Frontend Challenge! The purpose of this challenge is to assess your skills and approach to composing a simple web app. We will assess the **generated HTML, CSS, and JS** output. Although this is a basic exercise, we'll be looking for **simple, well-designed and performant** in the submission.

## Instructions
1. Fork this repository
2. Commit early and often
3. Please include a `README` with setup instructions
4. Add Marcusyeoce (Github user) to the project

You may use either the React.js or Next.js framework. There is no need to use Redux for state management.

Meet all of the following requirements if possible, but you can also submit with several
requirements dropped. When submitting, please tell us which requirements that you feel have
been completed.

## Challenge
![image](https://user-images.githubusercontent.com/51117475/140429739-1024ab96-4b5c-460b-80f1-fdbe176dbdf5.png)

>The image above could be used as a reference. 

You are required to create a table with the following requirements:
- Team entries have two states: "collapsed" and "expanded". In the collapsed state, the team
positions are hidden.
- Position entries can be "selected" and "unselected".
- Team entries can be 'selected' and 'unselected'. When any position entry in a team entry is
'checked', the team entry itself will be 'checked'. When a team entry is 'unchecked', all of its
job entries need to be 'unchecked' as well.
- The 'number of hires' in a team entry (the number in square brackets in the example) is
equal to the sum of the number of hires for all the 'selected' job entries in the team (the
number in square brackets in the example).
- The web page in the example image does not have any CSS, so please do your best to add
style and improve the design. We prefer if you write your own CSS instead of using third party CSS frameworks.

The following requirements are **optional**, we do not expect you to do it, but you may attempt if you are looking for a challenge:
- New teams can be added. When adding a new team, you need to enter the name of the new
team (it cannot be duplicated with an existing team).
- You can add a new position to any team. When adding a new position, you need to enter the
name of the new position (which cannot be duplicated with all existing positions) and the
number of hires.
- You can change the name of any existing team.
- Any existing position can have its name and number of hires changed.

## Data
Here's the data to initialize your application:

`{
  teams: [
    {
      name: "Dev Team",
      jobs: [
        {
          name: "Web Engineer",
          count: 3,
        },
        {
          name: "iOS Engineer",
          count: 1,
        },
        {
          name: "Android Engineer",
          count: 1,
        },
        {
          name: "Data Engineer",
          count: 3,
        },
        {
          name: "DevOps Engineer",
          count: 1,
        },
      ],
    },
    {
      name: "Product Team",
      jobs: [
        {
          name: "UI Designer",
          count: 2,
        },
        {
          name: "UX Designer",
          count: 2,
        },
        {
          name: "Product Manager",
          count: 1,
        },
      ],
    },
    {
      name: "Operation Team",
      jobs: [],
    },
  ],
}`

Here is the [API](https://run.mocky.io/v3/d221c7f4-9b18-418c-a741-1932f94fc82c) to retrieve the data, if you decide to mock it, be it client side or server side, we're cool as well!
