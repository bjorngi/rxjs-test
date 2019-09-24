import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

import { XMLHttpRequest } from 'xmlhttprequest'
function createXHR() {
  return new XMLHttpRequest();
}

const sub$ = ajax({
  createXHR,
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  crossDomain: true
}).pipe(
  map(resp => resp.response),
  catchError(err => of(`Nope, the error is ${err.status}`)
  )
)

sub$.subscribe(console.log)
