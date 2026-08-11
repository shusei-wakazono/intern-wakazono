import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface Book {
  id: number;
  title: string;
  summary: string;
  score: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    //CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  newTitle = '';
  newSummary = '';
  newScore: number | null = null;

  books: Book[] = [
    {
      id: 1,
      title: 'アンドロイドは電気羊の夢を見るか？',
      summary:
        '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      score: 90,
    },
    {
      id: 2,
      title: '岩田さん: 岩田聡はこんなことを話していた。',
      summary: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      score: 90,
    },
  ];

  addBook() {
    if (!this.newTitle) return;

    this.books.push({
      id: Date.now(),
      title: this.newTitle,
      summary: this.newSummary,
      score: this.newScore ?? 0,
    });

    this.newTitle = '';
    this.newSummary = '';
    this.newScore = null;
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
