export const Skills = () => {
    return (
      <section id="skills">
        <h1 className='section-title'>Skills</h1>
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          <article className='text-xl md:text-xl lg:text-2xl leading-7 md:basis-1/2 pr-0 sm:pr-48 md:pr-64 lg:pr-0'>
            With a B.S. in Computer Engineering from UCSD (2023), 
            my blend of hardware and software insights has fueled 
            my pivot toward full-stack development. Proficient in 
            both backend and frontend technologies, coupled with a 
            foundation in SWE methodologies, I strive to offer a 
            well-rounded perspective in problem-solving.
          </article>
          <div className="md:basis-1/2">
              <div className="collapse collapse-plus group collapse-container">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title collapse-title-style">
                  <div className="skills-title">
                    Backend & Data 
                  </div>
                </div>
                <div className="collapse-content collapse-text-style"> 
                  <article className="skills-container-article">My commitment to code maintainability, 
                    coupled with Agile methodologies and 
                    Test Driven Development, ensures a strategic and 
                    reliable approach to addressing diverse challenges.
                  </article>
                  <ul className="skills-list">
                    <li>
                        Designing, developing, unit testing, and integrating 
                        software to support the development, enhancement, and 
                        maintenance of elements of existing infrastructure
                    </li>
                    <li>
                        Schemas and database layout (SQL, MySQL, MongoDB)
                    </li>
                    <li>
                        Version control (Git/GitHub)
                    </li>
                    <li>
                        Agile techniques: User Stories, Sprints, 
                        Burn Down Charts, Continuous Integration, Continuous Testing, Standups
                    </li>
                    <li>
                      Python (FastAPI, Pydantic), Java, C/C++
                    </li>
                  </ul>
                </div>
              </div>

            <div className="divider divider-accent collapse-container"></div>

              <div className="collapse collapse-plus group collapse-container">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title collapse-title-style">
                  <div className="skills-title">
                    Frontend & Web 
                  </div>
                </div>
                <div className="collapse-content collapse-text-style"> 
                  <article className="skills-container-article">
                  Leveraging my understanding of design and seamless 
                  navigation between frontend and backend environments, 
                  I aim to contribute to a comprehensive and efficient 
                  development process emphasizing performance and usability. 
                  </article>
                  <ul className="skills-list">
                    <li>
                      HTML/ CSS/ Javascript (Typescript)
                      <ul className="skills-list pl-2">
                        <li>
                        React (Hook based components), NextJS
                        </li>
                        <li>
                        Bootstrap, TailwindCSS
                        </li>
                      </ul>
                    </li>
                    <li>
                    Server maintenance (Apache, Ubuntu) 
                    </li>
                    <li>
                    NodeJS SQL library integration
                    </li>
                    <li>
                    Prototyping (Low, Med, High Fidelity)
                    </li>
                    <li>
                    Effective color pallets, typography, and wireframing
                    </li>
                  </ul>
                </div>
              </div>

            <div className="divider divider-accent collapse-container"></div>

              <div className="collapse collapse-plus group collapse-container">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title collapse-title-style">
                  <div className="skills-title">
                  Essentials
                  </div>
                </div>
                <div className="collapse-content collapse-text-style"> 
                  <article className="skills-container-article">
                  Rooted in a diverse skill set, my expertise translates 
                  into effective solutions, making significant contributions 
                  across software development, UI design, and system architecture.
                  </article>
                  <ul className="skills-list">
                    <li>
                    Product Engineering
                    </li>
                    <li>
                    Web Client Languages
                    </li>
                    <li>
                    Online Database Analytics
                    </li>
                    <li>
                    Human-Computer Interaction
                    </li>
                    <li>
                    Computer Architecture
                    </li>
                    <li>
                    Operating Systems
                    </li>
                    <li>
                    Software Engineering
                    </li>
                    <li>
                    Data Structures
                    </li>
                  </ul>
                </div>
              </div>

            <div className="divider divider-accent collapse-container"></div>
          </div>
        </div>
      </section>
    );
}