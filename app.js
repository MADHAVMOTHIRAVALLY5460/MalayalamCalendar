import {Kollavarsham} from 'kollavarsham';
import express from 'express';

const app = express()
app.use(express.json())

const fetch = new Kollavarsham()
const date = fetch.fromGregorianDate(new Date())

const data = {
	'date': date.date,
	'month': date.mlMasaName,
	'year': date.year
}

app.get('/', (req, res) => {
	res.json(data)
})

app.listen(process.env.PORT || 3000, () => console.log("LIVE!"))	