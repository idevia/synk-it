// export class Lists{
//     name: any;
//     link:any;
//     category:any;
// }
export class Bookmark {
    // sno: number;
    name: string;
    link: string;
    category: string;
    
}

export class Category {
    name: string
}

// export class CategoryList: Category[] {

// }

export const BookmarkList: Bookmark[] = [
    { name: 'Mary', link: 'https://angular.io/guide/observables', category:'Uncategorized'  },
    { name: 'Peter', link: 'https://angular.io/guide/observables', category: 'Uncategorized'},
    { name: 'Lauren', link: 'https://angular.io/guide/observables', category: 'Uncategorized' }
];