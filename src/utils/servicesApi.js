import { inject, singleton } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client'
// sample-layout-mrg
@inject(HttpClient)
export class ApiService {
  constructor(http) {
    this.http = http;
    this.upmess = ''
    //    this.baseweb = 'https://gtztest.com/api/' 
    this.basewebnina = 'http://gallery.meledandri.com:9015/api/'
    this.baseweb = 'https://backend.brookbridgeinc.com/api/'
    // this.baseweb = 'http://localhost/api/'
    //this.baseGCP = 'https://backend.brookbridgeinc.com/api/'
    this.baseWorkflow = 'https://cm.brookbridgeinc.com/'

    this.basefastify = 'http://localhost:3000/'

  }
  async getbakery() {
    var url = this.basefastify + 'api/bakery'
    return await fetch(url, {
      mode: 'cors'
    }).then((res) => res.json())
  }
  async getMenus() {
    var url = `${this.basewebnina}menu`;
    return await this.http.fetch(url, {
      mode: 'cors'
    }).then((res) => res.json())
  }

  addbakeryJ(product) {
    var url = this.basefastify + 'api/bakery';
    console.log('url ', url,product)
    return fetch(url, {
        method: 'post',
        // mode: 'cors',
        headers: {
            //  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            //  dataType: 'json',

            'Content-Type': 'application/json',

        },
        // data: JSON.stringify(product)
        body: JSON.stringify(product)
    }).then((res) => res.json());
}
  async getImages() {
    var url = `${this.basewebnina}images`;
    return await this.http.fetch(url, {
      mode: 'cors'
    }).then((res) => res.json())
  }

  async  findcontents(content, completed) {

    let url = this.baseweb + `v1/case/findcontents/${content}/${completed}`
    console.log(' content  ', content, completed, url)
    //  'https://backend.brmflow.com/api/v1/case/findcontents/${content}/${completed}`

    return await this.api.findcontents(content, completed).then((res) => res.json())
  }
  //   async findcontents(content, completed) {

  //     let url = this.baseweb + `v1/case/findcontents/${content}/${completed}`
  //     console.log(' content  ', content, completed,url)
  // //  'https://backend.brmflow.com/api/v1/case/findcontents/${content}/${completed}`

  //     return await this.http.fetch(url).then((res) => res.json())
  // }
  // async getpost(posttitle) {
  //   var url = `${this.baseweb}posts/${posttitle}`;
  //   return await this.http.fetch(url, { mode: 'cors' }).then((res) => res.json())

  // }

  getImagesold() {
    var url = `${this.basewebnina}images`;
    return fetch(url).then((res) => res.json())
  }

  getMenusold() {
    var url = `${this.basewebnina}menu`;
    return fetch(url).then((res) => res.json())
  }

  getpost(posttitle) {
    var url = `${this.basewebnina}posts/${posttitle}`;
    return fetch(url).then((res) => res.json())
  }

  // walkdir(scanpath) { 
  async walkdir(scanapth) {
    // let scanapth = 'DOBRECEIPTS'
    //http://127.0.0.1/api/v1/walkdir/getFiles/DOBRECEIPTS
    // http://localhost/api/v1/walkdir/getFiles/DOBRECEIPTS
    // http://localhost.com/api/v1/walkdir/getFiles/DOBRECEIPTS"
    let url = this.baseweb + `v1/walkdir/getFiles/${scanapth}`
    console.log('walkdir', url)
    // return await this.http.fetch(url).then((res) => res.json())
    return await this.http.fetch(url, {
      mode: 'cors'
    }).then((res) => res.json())

  }

  // walkdirQF() {
  //   let url = baseweb + 'v1/walkdir/getFilesQF'
  //   return this.http.fetch(url).then((res) => res.json())
  // }

  async findcaseall() {
    //https://backend.brookbridgeinc.com/api/v1/case/findall
    var url = this.baseweb + 'v1/case/findall'
    return await this.http.fetch(url).then((res) => res.json())
  }
  async findcase(roles, auth) {
    let url = this.baseweb + `v1/case/find/${auth.user.id}`
    return await this.http.fetch(url).then((res) => res.json())
  }

  async findcontents(content, completed) {

    let url = this.baseweb + `v1/case/findcontents/${content}/${completed}`
    console.log(' content  ', content, completed, url)
    //  'https://backend.brmflow.com/api/v1/case/findcontents/${content}/${completed}`

    return await this.http.fetch(url).then((res) => res.json())
  }


  updatecase(row, user) {
    // let newrow = {}
    // newrow._id = row._id
    // newrow.assignto = row.assignto
    // newrow.billedamt = row.billedamt
    // newrow.completed = row.completed
    // newrow.payamt = row.payamt
    // newrow.savedamt = row.savedamt
    // newrow.template = row.template
    // newrow.type = row.type
    // newrow.memo = row.memo
    // newrow.filename = row.filename
    // newrow.createdAt = row.createdAt
    // newrow.assignfrom = user.userid // matched staffid unless we use init
    let url = this.baseweb + `v1/case/update`
    return this.http.fetch(url, {
      method: 'put',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // , 'Authorization': 'JWT ' + token
      },
      body: JSON.stringify(row)
      // body: JSON.stringify(newrow)
    }).then((res) => res.json());

  }
  async deletecase(row, token) {
    console.log('this.e ', row.id)
    let pid = row.id
    let url = this.baseweb + `v1/case/deletecase`///${pid}`
    // return this.http.fetch(url).then((res) => res.json())
    return this.http.fetch(url, {
      method: 'delete',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        , 'Authorization': 'JWT ' + token
      },
      body: JSON.stringify(row)
    }).then((res) => res.json());

  }

};
