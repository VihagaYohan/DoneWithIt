import client from './Client';

const endpoints = '/listings'

const getListings = ()=> client.get(endpoints)

export default{
    getListings,
}