import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReactPlayer from 'react-player';

//SOFT SKILLS VIDEOS//
        const VIDEO_0 ="https://www.youtube.com/watch?v=4ivhLCdAP6U";
        const VIDEO_1 ="https://www.youtube.com/watch?v=pJ7RgUCEd5M"; 
        const VIDEO_2 ="https://www.youtube.com/watch?v=aSj4IQyo3rE";
        const VIDEO_3 ="https://www.youtube.com/watch?v=zdAfzLry85I";
        const VIDEO_4 ="https://www.youtube.com/watch?v=1IyXhEO8Oo0";
//TECHNICAL SKILLS VIDEOS//
        const VIDEO_5 ="https://www.youtube.com/watch?v=0FFLFcB9xfQ"; 
        const VIDEO_6 ="https://www.youtube.com/watch?v=_uQrJ0TkZlc";
        const VIDEO_7 ="https://www.youtube.com/watch?v=xsVTqzratPs";
        const VIDEO_8 ="https://www.youtube.com/watch?v=v-djL7SPw4c";
        const VIDEO_9 ="https://www.youtube.com/watch?v=aPEUKLxxh_k";

        

function SoftSkills(){
    const playerRef = useRef(null);
    return(
        <div class="Tabcontainer"
        style={{
            marginTop:'10vh'
        }}>
     
            <h1 className='h1_title-menu'>Training and Development</h1>
        
    <Tabs
      defaultActiveKey="softSkills"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
            
    <Tab eventKey="softSkills" title="Soft Skills">
        <Container maxwidth="md">
            <div className="div1">
                <ReactPlayer 
                className="videoPlayer"
                width={"100%"} 
                height={"100%"}
                ref={playerRef} 
                url={[VIDEO_0,VIDEO_1,VIDEO_2,VIDEO_3,VIDEO_4]}
                controls={true}
                />
            </div>
        </Container>
        
          <section className="articles">
            <article>
              <div className="article-wrapper">
                <figure>
                <img src="https://i.pinimg.com/564x/71/94/c9/7194c969967f7ee2ec86f3cc7ad54257.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h3>Personal Development</h3>
                  <p>
                  Personal development training refers to activities and programs designed to enhance an individual's skills, knowledge, and overall capabilities to achieve personal and professional goals. It is a lifelong process that involves self-reflection, goal setting, and continuous learning.
                  </p>
                  <a href="#" class="read-more">
                    Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
             </div>
            </article>
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src="https://i.pinimg.com/564x/32/93/93/329393b1072d0a2b1e5154d5431f38ce.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h3>Leadership Skills</h3>
                  <p>
                  Refers to the intentional and continuous process of enhancing the abilities and qualities necessary to lead, inspire, and guide others effectively. Leadership skills are not inherent; they can be cultivated and refined through various activities, experiences, and focused efforts. 
                  </p>
                  <a href="#" class="read-more">
                    Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article>
                <div className="article-wrapper">
                  <figure>
                  <img src="https://i.pinimg.com/564x/c8/46/7f/c8467f13412c234613f133912860901b.jpg" alt="" />
                  </figure>
                  <div className="article-body">
                    <h3>Time Management</h3>
                    <p>
                    Time management skills development involves adopting strategies and techniques to effectively use time, prioritize tasks, and increase productivity. Improving time management skills can lead to reduced stress, better work-life balance, and enhanced overall efficiency.
                    </p>
                    <a href="#" class="read-more">
                      Read more <span class="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </section>
      
      </Tab>
      <Tab eventKey="technicalSkills" title="Technical Skills">
      <Container maxwidth="md">
            <div className="div1">
                <ReactPlayer 
                className="videoPlayer"
                width={"100%"} 
                height={"100%"}
                ref={playerRef} 
                url={[VIDEO_5,VIDEO_6,VIDEO_7,VIDEO_8,VIDEO_9]}
                controls={true}
                />
            </div>
        </Container>
       
          <section className="articles">
            <article>
              <div className="article-wrapper">
                <figure>
                <img src="https://i.pinimg.com/564x/4c/ee/59/4cee592bcc44c740e3741b97ffda17c5.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h3>Project Management</h3>
                  <p>
                  This involves the planning, execution, and oversight of a project from its initiation to its completion. Project managers are responsible for leading and coordinating these activities. They need to balance competing demands, manage risks, communicate effectively, and ensure that the project meets its objectives. 
                  </p>
                  <a href="#" class="read-more">
                    Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
             </div>
            </article>
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src="https://i.pinimg.com/564x/23/55/cd/2355cd02b42ca6ea2dedf59c5af36e67.jpg" alt="" />
                </figure>
                <div className="article-body">
                  <h3>Coding & Programming</h3>
                  <p>
                  Coding is the act of writing specific instructions in a programming language, while programming involves the entire process of creating a software solution, including designing algorithms, coding, testing, and maintaining the code. Both terms are closely related and are essential components of software development.
                  </p>
                  <a href="#" class="read-more">
                    Read more <span class="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article>
                <div className="article-wrapper">
                  <figure>
                  <img src="https://i.pinimg.com/564x/56/85/e0/5685e02960e1dce64f890d62decff5d7.jpg" alt="" />
                  </figure>
                  <div className="article-body">
                    <h3>Financial Analysis</h3>
                    <p>
                    Investors use financial analysis to assess the profitability and growth potential of investments, while lenders use it to evaluate the creditworthiness of borrowers. Company management uses financial analysis to identify areas for improvement and make strategic decisions based on financial insights.
                    </p>
                    <a href="#" class="read-more">
                      Read more <span class="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </section>
  
      </Tab>

      <Tab eventKey="gallery" title="Team Building Gallery">
      <center><h2 className='h2_gallery'> Gallery</h2></center>
      <div class="container">
            <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
            <div class="col-12 col-md-6 col-lg-3">
                
            <img src="https://i.pinimg.com/564x/23/c9/58/23c958ee1e91536f81407ed91a00e9da.jpg" data-target="#indicators" data-slide-to="0" alt="" /> 
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/07/00/af/0700afaf3eae03d780ef65c3a9a6d2ce.jpg" data-target="#indicators" data-slide-to="1" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/65/87/a1/6587a180016fe26539ca25950fed3886.jpg" data-target="#indicators" data-slide-to="2"  alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/54/cf/bc/54cfbc8e4cd156be885fedaba23e4f69.jpg" data-target="#indicators" data-slide-to="3" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/2a/e1/64/2ae164c3127bccf3337a77c9ccd05dd4.jpg" data-target="#indicators" data-slide-to="4"  alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/41/18/48/4118480dc149fce8c49584f9faba9aa8.jpg" data-target="#indicators" data-slide-to="5" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/7f/74/65/7f7465de969c42a22411cac412dbfed8.jpg" data-target="#indicators" data-slide-to="6" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/e0/c7/7b/e0c77b96887edd89b457b1956b48480f.jpg" data-target="#indicators" data-slide-to="7" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/b6/38/74/b63874bc0d9744a86c5dbf52693895f4.jpg" data-target="#indicators" data-slide-to="8" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/76/64/c3/7664c3813219a973065d51849856313a.jpg" data-target="#indicators" data-slide-to="9" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/54/9b/cb/549bcbcedcdbf9a07d0c9a729e3555ba.jpg" data-target="#indicators" data-slide-to="10" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/00/c4/76/00c47686a121502130708bb7f490f2aa.jpg" data-target="#indicators" data-slide-to="11" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/c7/15/6f/c7156fa0fa02b660184f372ebadc89ea.jpg" data-target="#indicators" data-slide-to="12" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/a6/59/56/a659569ca4cdefedc37314702e40d326.jpg" data-target="#indicators" data-slide-to="13" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/f2/00/38/f20038aa58c55c2cee6e496dfa6342bd.jpg" data-target="#indicators" data-slide-to="14" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/cf/1f/1f/cf1f1fb1cbdf92ce9f48c09609cb6447.jpg" data-target="#indicators" data-slide-to="15" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/91/87/c1/9187c1cea0c8ecbf7596d811e5efb347.jpg" data-target="#indicators" data-slide-to="16" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/6a/d7/5e/6ad75ec3be3ca3e688e3b6d4b28d1a50.jpg" data-target="#indicators" data-slide-to="17" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/0c/00/1e/0c001e679c3aebfeb41692cb1365adfa.jpg" data-target="#indicators" data-slide-to="18" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <img src="https://i.pinimg.com/564x/6c/eb/46/6ceb467ba79fb676a07ea0b0d5c5f5b7.jpg" data-target="#indicators" data-slide-to="19" alt="" />
            </div>
            </div>


            <div class="modal fade" id="lightbox" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close text-right p-2" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                <div id="indicators" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators">
                <li data-target="#indicators" data-slide-to="0" class="active"></li>
                <li data-target="#indicators" data-slide-to="1"></li>
                <li data-target="#indicators" data-slide-to="2"></li>
                <li data-target="#indicators" data-slide-to="3"></li>
                <li data-target="#indicators" data-slide-to="4"></li>
                <li data-target="#indicators" data-slide-to="5"></li>
                <li data-target="#indicators" data-slide-to="6"></li>
                <li data-target="#indicators" data-slide-to="7"></li>
                <li data-target="#indicators" data-slide-to="8"></li>
                <li data-target="#indicators" data-slide-to="9"></li>
                <li data-target="#indicators" data-slide-to="10"></li>
                <li data-target="#indicators" data-slide-to="11"></li>
                <li data-target="#indicators" data-slide-to="12"></li>
                <li data-target="#indicators" data-slide-to="13"></li>
                <li data-target="#indicators" data-slide-to="14"></li>
                <li data-target="#indicators" data-slide-to="15"></li>
                <li data-target="#indicators" data-slide-to="16"></li>
                <li data-target="#indicators" data-slide-to="17"></li>
                <li data-target="#indicators" data-slide-to="18"></li>
                <li data-target="#indicators" data-slide-to="19"></li>
            </ol>
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                
                <img class="d-flex w-100" src="https://i.pinimg.com/564x/23/c9/58/23c958ee1e91536f81407ed91a00e9da.jpg" alt="0"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/07/00/af/0700afaf3eae03d780ef65c3a9a6d2ce.jpg" alt="1"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/65/87/a1/6587a180016fe26539ca25950fed3886.jpg" alt="2"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/54/cf/bc/54cfbc8e4cd156be885fedaba23e4f69.jpg" alt="3"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/2a/e1/64/2ae164c3127bccf3337a77c9ccd05dd4.jpg" alt="4"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/41/18/48/4118480dc149fce8c49584f9faba9aa8.jpg" alt="5"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/7f/74/65/7f7465de969c42a22411cac412dbfed8.jpg" alt="6"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/e0/c7/7b/e0c77b96887edd89b457b1956b48480f.jpg" alt="7"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/b6/38/74/b63874bc0d9744a86c5dbf52693895f4.jpg" alt="8"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/76/64/c3/7664c3813219a973065d51849856313a.jpg" alt="9"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/54/9b/cb/549bcbcedcdbf9a07d0c9a729e3555ba.jpg" alt="10"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/00/c4/76/00c47686a121502130708bb7f490f2aa.jpg" alt="11"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/c7/15/6f/c7156fa0fa02b660184f372ebadc89ea.jpg" alt="12"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/a6/59/56/a659569ca4cdefedc37314702e40d326.jpg" alt="13"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/f2/00/38/f20038aa58c55c2cee6e496dfa6342bd.jpg" alt="14"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/cf/1f/1f/cf1f1fb1cbdf92ce9f48c09609cb6447.jpg" alt="15"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/91/87/c1/9187c1cea0c8ecbf7596d811e5efb347.jpg" alt="16"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/6a/d7/5e/6ad75ec3be3ca3e688e3b6d4b28d1a50.jpg" alt="17"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/0c/00/1e/0c001e679c3aebfeb41692cb1365adfa.jpg" alt="18"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="https://i.pinimg.com/564x/6c/eb/46/6ceb467ba79fb676a07ea0b0d5c5f5b7.jpg" alt="19"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#indicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#indicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>

                </div>
            </div>
            </div>
        </div>


      </Tab>
    </Tabs>
</div>

  );
}




export default SoftSkills;