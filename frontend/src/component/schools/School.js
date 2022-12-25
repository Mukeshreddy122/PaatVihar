import React, { useEffect, useState } from "react";
import "./School.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const School = () => {
  const { id } = useParams();
  const [currentSchoolDetail, setSchool] = useState();
  useEffect(() => {
    axios
      .get(`/api/school/${id}`)
      .then((res) => {
        setSchool(res.data.school);
      })
      .catch((err) => {
        console.log(err);
      });
    window.scrollTo(0, 0);
  }, [id]);

  return <div>  
    <div className="page-header header-filter" data-parallax="true" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea899bbcf2c38cfb6133a63dc67d82c5&auto=format&fit=crop&w=6000&q=80 6000w')"}}></div>
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d74712e9b31ac943d46541e6e6ed559f&auto=format&fit=crop&w=2661&q=80 2661w" alt="Circle Image" className="img-raised rounded-circle img-fluid"/>
              </div>
              <div className="name">
                <h3 className="title">Christian Louboutin</h3>
                <h6>Designer</h6>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
            <div className="follow">
              <button className="btn btn-fab btn-primary btn-round" rel="tooltip" title="" data-original-title="Follow this user">
                <i className="material-icons">add</i></button>
            </div>
          </div>
        </div>
        <div className="description text-center">
          <p>An artist of considerable range, Chet Faker &#x2014; the name taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014; writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="profile-tabs">
              <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#work" role="tab" data-toggle="tab">
                    <i className="material-icons">palette</i> Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#studio" role="tab" data-toggle="tab">
                    <i className="material-icons">camera</i> Studio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                    <i className="material-icons">favorite</i> Favorite
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content tab-space">
          <div className="tab-pane work active show" id="work">
            <div className="row">
              <div className="col-md-7 ml-auto mr-auto ">
                <h4 className="title">Latest Collections</h4>
                <div className="row collections">
                  <div className="col-md-6">
                    <div className="card card-background" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea899bbcf2c38cfb6133a63dc67d82c5&auto=format&fit=crop&w=6000&q=80 6000w')"}}>
                      <a href="#pablo"></a>
                      <div className="card-body">
                        <label className="badge badge-warning">Spring 2016</label>
                        <a href="#pablo">
                          <h2 className="card-title">Stilleto</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-background" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa8c60909a4001de89272e6a352a5e84&auto=format&fit=crop&w=2124&q=80 2124w')"}}>
                      <a href="#pablo"></a>
                      <div className="card-body">
                        <label className="badge badge-info">Spring 2016</label>
                        <a href="#pablo">
                          <h2 className="card-title">High Heels</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-background" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7952feeae45b5c517fb05d741b4a10bd&auto=format&fit=crop&w=4896&q=80 4896w')"}}>
                      <a href="#pablo"></a>
                      <div className="card-body">
                        <label className="badge badge-danger">Summer 2016</label>
                        <a href="#pablo">
                          <h2 className="card-title">Flats</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-background" style={{backgroundImage:"url('https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc0481680b4c1af6d97f2ad778debfd9&auto=format&fit=crop&w=600&h=600&q=80 3024w'); opacity: 1')"}}>
                      <a href="#pablo"></a>
                      <div className="card-body">
                        <label className="badge badge-success">Winter 2015</label>
                        <a href="#pablo">
                          <h2 className="card-title">Men's Sneakers</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 mr-auto ml-auto stats">
                <h4 className="title">Stats</h4>
                <ul className="list-unstyled">
                  <li><b>60</b> Products</li>
                  <li><b>4</b> Collections</li>
                  <li><b>331</b> Influencers</li>
                  <li><b>1.2K</b> Likes</li>
                </ul>
                <hr/>
                <h4 className="title">About his Work</h4>
                <p className="description">French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles that have become his signature.</p>
                <hr/>
                <h4 className="title">Focus</h4>
                <span className="badge badge-primary">Footwear</span>
                <span className="badge badge-rose">Luxury</span>
              </div>

            </div>
          </div>
          <div className="tab-pane connections" id="studio">
            <div className="row">
              <div className="col-md-5 ml-auto mr-auto">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <a href="#pablo">
                          <img className="img" src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc0481680b4c1af6d97f2ad778debfd9&auto=format&fit=crop&w=600&h=600&q=80 3024w"/>
                        </a>
                        <div className="colored-shadow" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7952feeae45b5c517fb05d741b4a10bd&auto=format&fit=crop&w=4896&q=80 4896w')"}}></div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Anthon Jard</h4>
                        <h6 className="card-category text-muted">Model</h6>

                        <p className="card-description">
                          Don't be scared of the truth because we need to restart the human foundation in truth...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mr-auto ml-auto">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <a href="#pablo">
                          <img className="img" src="https://images.unsplash.com/photo-1525849621485-ad29b7be3f42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ddeb8596ae4e0044ba489682fbd8871&auto=format&fit=crop&w=600&h=600&q=60 2592w"/>
                        </a>
                        <div className="colored-shadow" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7952feeae45b5c517fb05d741b4a10bd&auto=format&fit=crop&w=4896&q=80 4896w')"}}></div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Marc Jacobs</h4>
                        <h6 className="card-category text-muted">Designer</h6>

                        <p className="card-description">
                          Don't be scared of the truth because we need to restart the human foundation in truth...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 ml-auto mr-auto">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <a href="#pablo">
                          <img className="img" src="https://images.unsplash.com/photo-1531681919706-90c96de21bed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cd6092f2e209722cc46638bcfbac613&auto=format&fit=crop&w=600&h=600&q=60 2000w"/>
                        </a>
                        <div className="colored-shadow" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7952feeae45b5c517fb05d741b4a10bd&auto=format&fit=crop&w=4896&q=80 4896w')"}}></div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Kendall Jenner</h4>
                        <h6 className="card-category text-muted">Model</h6>

                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of the truth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 ml-auto mr-auto">
                <div className="card card-profile card-plain">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-header card-header-image">
                        <a href="#pablo">
                          <img className="img" src="https://images.unsplash.com/photo-1536246228518-fc8da3ca5c11?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b247e0bb81d499ddeb2fd24ef08c3cb1&auto=format&fit=crop&w=600&h=600&q=80 3648w"/>
                        </a>
                        <div className="colored-shadow" style={{backgroundImage:"url('https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7952feeae45b5c517fb05d741b4a10bd&auto=format&fit=crop&w=4896&q=80 4896w')"}}></div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">George West</h4>
                        <h6 className="card-category text-muted">Model/DJ</h6>

                        <p className="card-description">
                          I love you like Kanye loves Kanye.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane text-center gallery" id="favorite">
            <div className="row">
              <div className="col-md-3 ml-auto">
                <img src="https://images.unsplash.com/photo-1519936492597-74c503a7b35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6aa6aeca6f83ecbc768ec9de1ee526a&auto=format&fit=crop&w=2400&q=60 2400w, https://images.unsplash.com/photo-1519936492597-74c503a7b35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6aa6aeca6f83ecbc768ec9de1ee526a&auto=format&fit=crop&w=2592&q=60 2592w" className="rounded"/>
                <img src="https://images.unsplash.com/photo-1505734169265-a86113baa6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3cb3cba824bd1a7c4756b3b1aec2242&auto=format&fit=crop&w=4000&q=80 4000w" className="rounded"/>
              </div>
              <div className="col-md-3 mr-auto">
                <img src="https://images.unsplash.com/photo-1493146146946-e907f69cdf23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e91332ee755dff4248422b1f8c1d26a4&auto=format&fit=crop&w=4240&q=80 4240w" className="rounded"/>
                <img src="https://images.unsplash.com/photo-1530530722414-a66e95a6ca5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77525d714ff5e061422b247601692b73&auto=format&fit=crop&w=6000&q=80 6000w" className="rounded"/>
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2c2e882a1115c02831a800290a47121&auto=format&fit=crop&w=5472&q=80 5472w" className="rounded"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>;
};
export default School;
