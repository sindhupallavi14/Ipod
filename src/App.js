import React from "react";
// import Ipodcon from "./Ipodcon";
import "./Ipod.css"
import ZingTouch from 'zingtouch';
import Ipodcon from "./Ipodcon";
import Settings from "./settings.jpg";
import podcast from "./Podcast-img.jpeg";
import games from "./Games-img.jpeg";
import albums from "./Albums.jpeg";
import artists from "./artists.jpeg";
import HeyMinnale from "./Hey Minnale.mp3";
import Chakori from "./Chakori.mp3";
import Chuttamalle from "./Chuttamalle.mp3";
import Emsandhemledu from "./Em Sandheham Ledhu.mp3";
import Evare from "./Evare.mp3";
import Evarevaro from "./Evarevaro.mp3";
import Kailove from "./Kailove.mp3";

class App extends React.Component
{

  constructor()
  {
    super();
    this.song_ref = React.createRef();
    this.temp_change_angle = 0;
    this.temp_currentoption = 0;
     this.state={
       options:["Games","Music","Settings","Podcasts"],
       change_angle:0,
       current_option :0,
       gen_menu:["Games","Music","Settings","Podcasts"],
       imgs:[games,,Settings,podcast,albums,artists],
       all_songs:["Hey Minnale.mp3","Chuttamalle.mp3","Evare.mp3","Em Sandheham Ledhu.mp3","Chakori.mp3","Evarevaro.mp3","Kailove.mp3"],
       songs_menu:["All songs","Albums","Artists"],
       song_url:[HeyMinnale,Chuttamalle,Evare,Emsandhemledu,Chakori,Evarevaro,Kailove],
       sng_list:false,
       music_scrn:false,
       sng_idx:0,
       plying_msc:false
     }
  }
  componentDidMount()
  {
      var zt = new ZingTouch.Region(document.querySelector('.ipodcon2'));
      zt.bind(document.querySelector('.ipodcon2'), 'rotate', (event) =>
      {
          if (document.querySelector('.menu-con').classList.contains('width-50'))
          {
              let dist = event.detail.distanceFromLast;
              this.temp_change_angle += dist;
              if (this.temp_change_angle > 60)
              {
                  this.temp_currentoption++;
                  this.temp_currentoption = this.temp_currentoption % this.state.options.length;
                  this.setState({
                    current_option: this.temp_currentoption,
                  
                  });

                  this.temp_change_angle = 0;
              }
              else if (this.temp_change_angle < -60)
              {
                  this.temp_currentoption--;
                  if (this.temp_currentoption === -1)
                      this.temp_currentoption = this.state.options.length - 1;

                  this.temp_currentoption = this.temp_currentoption % this.state.options.length;
                  this.setState({
                    current_option: this.temp_currentoption,
                  });
                  this.temp_change_angle = 0;
              }
          }

      });
  }
menuButtonSelector = () =>{
  const menuclassList = document.querySelector(".menu-con").classList;
  if(menuclassList.contains("width-50")){
    menuclassList.remove("width-50");
  }
  else{
    menuclassList.add("width-50");
  }
}

SelectButtonSelector=()=>
{
  const {imgs,current_option,options}=this.state;
  const screen=document.querySelector(".ipodcon1");
  
 if(!document.querySelector(".menu-con").classList.contains("width-50")){
  if(this.state.sng_list && !this.state.music_scrn){
    
      this.setState({
        music_scrn:true,
        plying_msc:true,
        sng_list:true,
      },()=>{this.pnp()})
      
    }
  return;
}

  if(options.length === 4 && current_option === 1 )
  {
     this.setState({
       options:this.state.songs_menu,
       current_option:0
     })
     return;
  }


  if(options.length === 3 && current_option === 0){
    this.setState({
     music_scrn:false,
     sng_list: true,
     sng_idx:0,
     plying_msc:false
     
    })
   this.menuButtonSelector();
   return;
 }


 if(options.length === 3)
  {
    screen.style.backgroundImage = `url(${imgs[current_option+3]})`;
  }
if(options.length === 4){
  screen.style.backgroundImage = `url(${imgs[current_option]})`;
}

  this.menuButtonSelector();


}


backbuttonSelector=()=>
  {
    if(this.state.options.length === 3 && document.querySelector('.menu-con').classList.contains('width-50')){
      this.setState({
        options: this.state.gen_menu,
        current_option:0
      })
    }
  
    if(this.state.sng_list && !document.querySelector('.menu-con').classList.contains('width-50')){
      const {sng_idx,all_songs} =this.state;
      
      if(sng_idx==0){
        this.setState({
          sng_idx :all_songs.length-1,
          plying_msc:false
        })
      }
      else{
        this.setState({
          sng_idx :sng_idx-1,
          plying_msc:false

        })
      }
    }
  }

  forwardbuttonSelector=()=>
  {
    if(this.state.sng_list && !document.querySelector('.menu-con').classList.contains('width-50')){
      const {sng_idx,all_songs} =this.state;

      if(sng_idx>=(all_songs.length-1)){
        this.setState({
          sng_idx :0,
          plying_msc:false
        })
      }
      else{
        this.setState({
          sng_idx :sng_idx+1,
          plying_msc:false

        })
      }
    }
  }
  pnp=()=>
  {
     const btn=document.querySelector(".ipodcon2");

     if(!this.state.music_scrn || document.querySelector(".menu-con").classList.contains('width-50') )
     {
       return;
     }


     const audioref=this.song_ref.current;
     if(this.state.music_scrn && !this.state.plying_msc)
     {
       audioref.play();
       this.setState
      ( {
         plying_msc: true,
       })
     }
     else
     {
      audioref.pause();
      this.setState
     ( {
        plying_msc: false,
      })
     }
  }
  render()
  {
     return(
      <>
      <div className="box">
       <Ipodcon
      options = {this.state.options}
      selectOption ={this.state.current_option}
      sng_list={this.state.sng_list}
      all_songs={this.state.all_songs}
      music_scrn={this.state.music_scrn}
      song_url={this.state.song_url}
      song_ref={this.song_ref}
      sng_idx={this.state.sng_idx}

      menu = {this.menuButtonSelector}
      Select={this.SelectButtonSelector}
      back={this.backbuttonSelector}
      forward={this.forwardbuttonSelector}
      pnp={this.pnp}
       />
      </div>
     
      </>
     )
  }
}

export default App;