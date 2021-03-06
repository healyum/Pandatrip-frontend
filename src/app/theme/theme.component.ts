import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeModel} from './theme.model';
import {ThemeService} from './theme.service';


@Component({
  selector: 'themes',
  templateUrl: 'theme.component.html',
  styleUrls: ['theme.component.css', '../../../node_modules/bulma/css/bulma.css'],
  providers: [ThemeService]
})

export class ThemeComponent implements OnInit {
  lineThemes = [];
  selectedThemeModel: ThemeModel;

  constructor(private router: Router,
              private themeService: ThemeService) {
  }

  separateLine = function (nbElementPerLine, themes) {
    let array = new Array();

    for (let i = 0; i < themes.length; i++) {

      if (i % nbElementPerLine === 0) {
        array = new Array();
        this.lineThemes.push(array);
      }

      array.push(new ThemeModel(themes[i].id, themes[i].name, themes[i].image, themes[i].visits));
    }
  };

  onSelect(theme: ThemeModel, event: any) {
    event.stopPropagation();
    this.selectedThemeModel = theme;
    this.gotoDetail();
  }

  gotoDetail() {
    this.router.navigate(['/theme', this.selectedThemeModel.name]);
  }

  ngOnInit() {
    this.themeService.getNumbersThemes(8)
      .then((data: Object[]) => {
          this.separateLine(4, data['hydra:member']);
        }
      );
  }
}
