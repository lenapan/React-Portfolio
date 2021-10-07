# Challenge 14: React Portfolio
For this challenge, students will utilize the skill they have learned in `Module 14: React` to develop the initial scaffolding of their portfolio sites.

Now that you've worked with React and have multiple projects to share, it's time to develop the initial scaffolding for your first portfolio site as well as create and/or update other materials so that you can showcase your skills to potential employers. Creating a portfolio using React will help set you apart from other developers whose portfolios do not use some of the latest technologies.

## Instructions
* Students must fullfil the requirements listed in the following sections:
  1. [Design](#design)
  2. [Components](#required-components)
  3. [Component Content](#required-component-content)
  4. [Updated Social Media Presence](#updated-social-media-presence)
     * [LinkedIn](#linkedin)
     * [GitHub](#github)

### Design
Remember, "good" design is subjective. Your site should look "polished" and "professional". Here are a few guidelines on what that means:
* Mobile-first design
* Choose a color palette for your site so it doesn't just look like
the default bootstrap theme or an unstyled HTML site.
* Make sure the font size is large enough to read and that the colors don't cause eye strain.
* If you want to go above and beyond, try using animations and react component libraries. Note that this will _not_ affect your grade, but it may impact how potential employers gauge your knowledge.

### Base Requirements
* Technologies that must be used:
  * [ ] React
  * [ ] Navigation with `React Router`, dynamic rendering, or another third part router
* Your portfolio **must contain** the following information:
  * [ ] Your name
  * [ ] Links to your:
    * [ ] GitHub Profile
    * [ ] LinkedIn Page
    * [ ] Email Address
    * [ ] Phone Number - (optional)
    * [ ] PDF version of your resume
      * Your resume **must** contain up-to-date projects and professional experience
    * [ ] A list of projects. For each project, make sure you have the following:
      * [ ] Project title
      * [ ] Link to the deployed version
      * [ ] Link to the GitHub repository
      * [ ] GIF or screenshot of the deployed application

### Required Components
* At a minium, your portfolio must render these 6 components:
  1. [ ] App
  2. [ ] Header
  4. [ ] Home
  5. [ ] Project Gallery
  6. [ ] Project
  7. [ ] Contact

### Required Component Content
* [ ] App:
  * [ ] Must be your top level component and render all necessary children components
* [ ] Header:
   * [ ] Must be rendered across the entire site
   * [ ] Must Contain a Navbar
* [ ] Project Gallery:
  * [ ] Must render dynamically instances of the Project component based on how many projects you have
    * [ ] Be sure to store your project data in a JSON file and import it into your project
* [ ] Project:
   * [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
   * [ ] Must utilize router props to properly render the right project based on user selection
   * [ ] Must render the following info:
     * [ ] Project title
     * [ ] Link to the deployed version
     * [ ] Link to the GitHub repository
     * [ ] GIF or screenshot of the deployed application
* [ ] Contact:
  * [ ] Must have contact information
  * [ ] Bonus:
    * [ ] Have a contact form for handling events
* [ ] Home:
  * This should be a welcome landing page that contains:
     * [ ] Your Name
     * [ ] A Headshot of you
     * [ ] Your brand statement
     * [ ] Some indication that this is your portfolio site

### Updated Social Media Presence
#### LinkedIn
* Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.
* If you do not have a LinkedIn profile, please create one.
#### GitHub

* Update GitHub profile with pinned repositories featuring those same projects.

## Grading

This challenge is assessed on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria 

### Deployment: 32%

* Application deployed at live URL (if applicable).

* Application loads with no errors.

* Application GitHub URL submitted (if applicable).

* GitHub repository that contains application code.

### Application Quality: 15%

* Application resembles (at least 90%) screenshots provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.
- - -
© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
