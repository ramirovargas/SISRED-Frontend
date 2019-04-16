import {Component, OnInit} from '@angular/core';
import {AnnotationComments} from '@contently/videojs-annotation-comments';

declare let videojs: any;

@Component({
  selector: 'app-comentarios-version-video',
  templateUrl: './comentarios-version-video.component.html',
  styleUrls: ['./comentarios-version-video.component.css']
})
export class ComentariosVersionVideoComponent implements OnInit {

  constructor() {
  }

  annotations = [
    {
      id: this.guid(),
      range: {
        start: 55, end: 60
      },
      shape: {
        x1: 23.47, y1: 9.88, x2: 60.83, y2: 44.2
      },
      comments: [
        {
          id: this.guid(),
          meta: {
            datetime: '2017-03-28T19:17:32.238Z',
            user_id: 1,
            user_name: 'Jack Pope'
          },
          body: 'Is the "Stories API" the only API we want to highlight here? It makes the system feel a little limited, even though we have robust functionality and multiple APIs'
        }
      ]
    },
    {
      range: {
        start: 65, stop: null
      },
      shape: {
        x1: 0.97, y1: 65.19, x2: 36.25, y2: 97.28
      },
      comments: [
        {
          id: '2854a682-ffdf-78a4-796d-22abb6d9cac3',
          meta: {
            datetime: '2017-03-28T19:18:25.485Z',
            user_id: 2,
            user_name: 'Evan Carothers'
          },
          body: 'Can we replace this logo with Microsoft?'
        },
        {
          id: this.guid(),
          meta: {
            datetime: '2017-03-29T00:18:25.485Z',
            user_id: 1,
            user_name: 'Jack Pope'
          },
          body: 'Great idea Evan, that\'s a SUPER recognizable brand! Any other major company brands we are missing in this shot?'
        }
      ]
    },
    {
      range: {
        start: 100, end: null
      },
      shape: null,
      comments: [
        {
          id: 'e0b9787b-fbe7-f1e9-5134-d0eb69a783aa',
          meta: {
            datetime: '2017-03-28T19:21:41.351Z',
            user_id: 1,
            user_name: 'Jack Pope'
          },
          body: 'Can we have a music change for this final section that transitions towards the final frame? Some sweet heavy rock 80s ballad?'
        }
      ]
    },
    {
      range: {
        start: 21, end: 61
      },
      shape: null,
      comments: [
        {
          id: 'e0b9787b-fbe7-f1e9-5134-d0eb69a783aa',
          meta: {
            datetime: '2017-03-28T19:21:41.351Z',
            user_id: 2,
            user_name: 'Evan Carothers'
          },
          body: 'The music is a little loud through this section and distracts from the content and narration a bit - can we tone \'er down a couple nocks here?'
        }
      ]
    }
  ];
  mostrar = true;
  playerOptions = {controlBar: {volumePanel: {inline: false}}};
  pluginOptions = {
    annotationsObjects: this.annotations,
    bindArrowKeys: true,
    meta: {
      user_id: 2,
      user_name: 'John Smith'
    },
    showControls: true,
    showCommentList: true,
    showFullScreen: true,
    startInAnnotationMode: false,
    showMarkerShapeAndTooltips: true
  };

  player: any;

  ngOnInit() {
  }

  addPluginVideo(): void {
    this.mostrar = false;
    this.player = videojs('my-video', this.playerOptions, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // In this context, `this` is the player that was created by Video.js.
      this.play();

      // muted
      this.muted(true);

      // How about an event listener?
      /*this.on('ended', function() {
        videojs.log('Awww...over so soon?!');
      });*/
    });

    const plugin = this.player.annotationComments(this.pluginOptions);
    plugin.onReady(console.log('PLUGIN IS READY!'));
  }


  s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  guid(): string {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

}
