import {applyMiddleware, createStore, compose} from 'redux'
import beethoven from './reducers'
import thunk from "redux-thunk";

const initialStore = {
  menus:{
    NavIndex : null,
    MenuList : [],
    ListSales : [],
    loading : null
  },
  alerts:{
    alertList : []
  },

  cas : {
    badgeuse : false,
    connected : false, //default : false
    userUid : null,
    userPin : null,
    sessionId : null,
    username : null, //default : null
    redirected : false,
    rightsList : null
  },

  vente: {
    loaded : false,
    listCateg : [],
    id_Categ : null,
    selectedArticles : [],
    loadedArt : false,
    listArticles : [],
    event_id : null, //default : null
    picked : false //default : false
    },
  achats: {
    clientUid : null,
    state_transaction : 'listen',
    info_client : null
  },

  webTV: {
    tvLink : null,
    enableMessages : false,
    messages : []
  },

  admin : {
    AdminNav : null,
    webTv1Url : null,
    webTv2Url : null,
    webTv1Messages : false,
    webTv2Messages : false,
    urls : [],
    goodiesList : []
  }
}

export const store = createStore
(
  beethoven,
  initialStore,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
