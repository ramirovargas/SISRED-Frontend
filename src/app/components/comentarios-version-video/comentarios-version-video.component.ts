import {Component, OnInit} from '@angular/core';
import {AnnotationComments} from '@contently/videojs-annotation-comments';
import {CommentsVersionVideoService} from '../../services/recurso/comments-version-video.service';
import {ActivatedRoute} from '@angular/router';

declare let videojs: any;

/**
 * Componente encargado de los Comentarios de una version de recurso video.
 */
@Component({
  selector: 'app-comentarios-version-video',
  templateUrl: './comentarios-version-video.component.html',
  styleUrls: ['./comentarios-version-video.component.css']
})
export class ComentariosVersionVideoComponent implements OnInit {

  idVersion = 0;
  idRecurso = 1;
  pluginOptions: any;
  annotations = this.commentsVersionVideoService.getCommentsVersionVideo(this.idRecurso);
  mostrar = true;
  playerOptions = {controlBar: {volumePanel: {inline: false}}};
  player: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsVersionVideoService: CommentsVersionVideoService
  ) {
    this.idVersion = this.activatedRoute.snapshot.params.idVersion;
    this.idRecurso = this.activatedRoute.snapshot.params.idRecurso;
  }

  ngOnInit() {
    //this.addPluginVideo();
  }

  addPluginVideo(): void {
    this.annotations = this.commentsVersionVideoService.getCommentsVersionVideo(this.idRecurso);

    this.pluginOptions = {
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

    this.mostrar = false;
    this.player = videojs('my-video', this.playerOptions, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // In this context, `this` is the player that was created by Video.js.
      // this.play();

      // muted
      this.muted(false);

      // How about an event listener?
      /*this.on('ended', function() {
        videojs.log('Awww...over so soon?!');
      });*/
    });

    const plugin = this.player.annotationComments(this.pluginOptions);
    plugin.onReady(console.log('PLUGIN IS READY!'));
    plugin.on('onStateChanged', (event) => {
      console.log('Persistiendo Comentarios->');
      console.log(event.detail);
      this.commentsVersionVideoService.addVideoComments(this.idVersion, this.idRecurso, event.detail);
    });
  }

}
