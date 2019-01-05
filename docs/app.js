/*
 Fööni videos
*/

const videoBase = "https://storage.googleapis.com/the-magnificient-flying-lansios/";

const videos = [
  {index: 0, time: "13:21", file: "04-01-13-21-23-Milla-Bottom.mp4", flyer: "Milla", view: "Bottom"},
  {index: 1, time: "13:21", file: "04-01-13-21-23-Milla-Top.mp4", flyer: "Milla", view: "Top"},
  {index: 2, time: "13:22", file: "04-01-13-22-23-Sasu-Bottom.mp4", flyer: "Sasu", view: "Bottom"},
  {index: 3, time: "13:22", file: "04-01-13-22-23-Sasu-Top.mp4", flyer: "Sasu", view: "Top"},
  {index: 4, time: "13:23", file: "04-01-13-23-23-Jarppe-Bottom.mp4", flyer: "Jarppe", view: "Bottom"},
  {index: 5, time: "13:23", file: "04-01-13-23-23-Jarppe-Top.mp4", flyer: "Jarppe", view: "Top"},
  {index: 6, time: "13:24", file: "04-01-13-24-28-Titta-Bottom.mp4", flyer: "Titta", view: "Bottom"},
  {index: 7, time: "13:24", file: "04-01-13-24-28-Titta-Top.mp4", flyer: "Titta", view: "Top"},
  {index: 8, time: "13:25", file: "04-01-13-25-28-Kaapo-Bottom.mp4", flyer: "Kaapo", view: "Bottom"},
  {index: 9, time: "13:25", file: "04-01-13-25-28-Kaapo-Top.mp4", flyer: "Kaapo", view: "Top"},
  {index: 10, time: "13:32", file: "04-01-13-32-28-Milla-Bottom.mp4", flyer: "Milla", view: "Bottom"},
  {index: 11, time: "13:32", file: "04-01-13-32-28-Milla-Top.mp4", flyer: "Milla", view: "Top"},
  {index: 12, time: "13:34", file: "04-01-13-34-09-Sasu-Bottom.mp4", flyer: "Sasu", view: "Bottom"},
  {index: 13, time: "13:34", file: "04-01-13-34-09-Sasu-Top.mp4", flyer: "Sasu", view: "Top"},
  {index: 14, time: "13:35", file: "04-01-13-35-09-Jarppe-Bottom.mp4", flyer: "Jarppe", view: "Bottom"},
  {index: 15, time: "13:35", file: "04-01-13-35-09-Jarppe-Top.mp4", flyer: "Jarppe", view: "Top"},
  {index: 16, time: "13:36", file: "04-01-13-36-09-Titta-Bottom.mp4", flyer: "Titta", view: "Bottom"},
  {index: 17, time: "13:36", file: "04-01-13-36-09-Titta-Top.mp4", flyer: "Titta", view: "Top"},
  {index: 18, time: "13:37", file: "04-01-13-37-09-Kaapo-Bottom.mp4", flyer: "Kaapo", view: "Bottom"},
  {index: 19, time: "13:37", file: "04-01-13-37-09-Kaapo-Top.mp4", flyer: "Kaapo", view: "Top"}
];


const currentVideoIndex = () => {
  let i = parseInt(window.location.hash.substr(1), 10);
  return isNaN(i) ? 0 : i;
}


const showVideo = i => {
  document.getElementById("video-" + i).selected = true;
  document.getElementById("video").src = videoBase +  videos[i].file;
};


const setIndex = i => {
  window.location.hash = "#" + i;
}

const moveIndex = (e, direction) => {
  e.preventDefault();
  var i = currentVideoIndex() + direction,
      i = (i >= videos.length) ? 0 : i,
      i = (i < 0) ? videos.length - 1 : i;
  setIndex(i);
}


const nextVideo = e => moveIndex(e, 1);
const prevVideo = e => moveIndex(e, -1);


const onHashChange = _ => {
  showVideo(currentVideoIndex());
};


const onSelectChange = (_) => {
  setIndex(parseInt(document.getElementById("videos").value, 10));
}

const init = () => {
  document.getElementById("nextFile").addEventListener("click", nextVideo);
  document.getElementById("prevFile").addEventListener("click", prevVideo);
  
  let videosSelect = document.getElementById("videos");
  for (let index = 0; index < videos.length; index++) {
    let option = document.createElement("option"),
        video = videos[index];
    
    option.value = "" + index
    option.id = "video-" + index;
    option.innerText = 
      video.flyer + 
      ", " + 
      video.view + 
      " (" + video.time + ")";   
    
    videosSelect.appendChild(option);
  }
  videosSelect.addEventListener("change", onSelectChange);

  window.onhashchange = onHashChange;

  if (window.location.hash === "") {
    window.location.hash = "#0";
  } else {
    onHashChange(null);
  }
}

document.addEventListener("DOMContentLoaded", init);
