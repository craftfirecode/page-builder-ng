import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getPageData(urlFilter: string): Observable<any> {
    console.log('getPageData', urlFilter);

    const params = {
      'filters[url][$eq]': urlFilter,
      'customPopulate': 'nested'
    };
    return this.http.get<any>(`${this.apiUrl}/api/pages`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    });
  }

  getPageDataByDocumentID(urlFilter: string): Observable<any> {
    console.log('getPageData', urlFilter);

    const params = {
      'filters[documentId][$eq]': urlFilter,
      'customPopulate': 'nested'
    };
    return this.http.get<any>(`${this.apiUrl}/api/pages`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    });
  }

  getSettingsData(): Observable<any> {
    const params = {
      'customPopulate': 'nested'
    };
    return this.http.get<any>(`${this.apiUrl}/api/navigation`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    });
  }

  getPageByHref(url: string): Observable<any> {
    const params = {
      'populate[top][populate]': '*',
    };

    return this.http.get<any>(`${this.apiUrl}/api/navigation`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    }).pipe(
      map(res => {
        const data = res.data;
        if (!data || !data.top) return null;
        return data.top.find((item: any) => item.href === url) || null;
      })
    );
  }

  getBlogListData(): Observable<any> {
    const params = {
      'customPopulate': 'nested'
    };
    return this.http.get<any>(`${this.apiUrl}/api/blogs`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    });
  }

  getBlogData(urlFilter?: string): Observable<any> {
    const params: any = urlFilter
      ? {url: urlFilter}
      : {};
    params['customPopulate'] = 'nested';
    return this.http.get<any>(`${this.apiUrl}/api/blogs`, {
      params,
      headers: {
        'authorization': `Bearer ${environment.strapiApi}`
      }
    });
  }
}
