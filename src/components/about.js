import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a full stack developer working on an scrum team
                        that supports account management projects for a
                        financial company in Durham, NC. I started supporting
                        technology groups 8 years ago as a Quality Assurance
                        Engineer. About 6 years ago I transitioned into an
                        Automation engineer. During that time I began to enjoy
                        coding and wanted to learn more about technology. In
                        2019, I attended a boot camp at the UNC Chapel Hill for
                        full-stack engineering. I learned so much about
                        end-to-end application development.
                      </p>
                      <p>
                        I love learning and exploring new technologies and
                        pushing myself to become the best developer I can be.
                        Recently I began studying for the AWS Certified
                        Developer certification. Everyday I learn something new
                        supporting multiple teams. I am a change agent among my
                        team. I love learning new ways to influence the team and
                        better processes to fix issues.
                      </p>
                      <p>
                        In my spare time, I enjoy watching television and
                        spending time with my family. I am pretty good a board
                        games and love Sudoku. I even go as far as to buy the
                        books of Sudoku and can play for hours. I am passionate
                        about music and I used to play the clarinet. I currently
                        enjoy listening to my son learn the guitar and piano.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <h4>Technology / Experience Level</h4>
                      <li>JavaScript / Intermediate</li>
                      <li>Java / Beginner</li>
                      <li>Node / Intermediate</li>
                      <li>Angular / Intermediate</li>
                      <li>React.js / Beginner</li>
                      <li>Vue.js / Intermediate</li>
                      <li>HTML / Intermediate</li>
                      <li>CSS / Intermediate</li>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Big Data Analysis</h3>
                    <p>
                      Troubleshooting issues and providing data is a passion of
                      mine. I enjoy dinging into things and examining if a
                      correlation exist. Understanding business requirements and
                      the customer focus is a strong skill that I pose as I
                      have worked on fields.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>
                      I have approximately 5 years of experience using DevOps
                      tools such as Git and Jenkins.
                    </p>
                    <p>
                      I am currently using some newer DevOps technologies such as Docker
                      and AWS for the last 2 years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Project Management</h3>
                    <p>
                      I earned my certified scrum master certification and have
                      performed scrum master duties on multiple scrum teams. I
                      am known for my tell it like it is personality and the
                      ability to influence groups. I have worked with offshore
                      resources for 6 years.
                    </p>
                    <p>
                      I have held a quality assurance position for 8 years while
                      performing this role I have been able to manage the
                      project timelines and ensure that quality is built into
                      the application during development.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
