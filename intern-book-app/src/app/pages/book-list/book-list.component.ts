import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Book } from '../../types/book';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CardComponent,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  newBook: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };
  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか？',
      detail:
        '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん: 岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,
    },
  ];
  addBook(): void {
    if (!this.newBook.name) return;

    this.bookList.push({ ...this.newBook });

    this.newBook = {
      name: '',
      detail: '',
      evaluation: 0,
    };
  }
  deleteBook(index: number): void {
    this.bookList.splice(index, 1);
  }
}
