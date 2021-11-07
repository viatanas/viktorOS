import dbConnect from "../../utils/dbConnect";
import Ama from "../../models/ama";

dbConnect();

export default function handler(req, res) {
  const { method } = req;

  // "GET" method
  switch (method) {
    case "POST":
      try {
        Ama.save({ question, isAnswered: false }); // Save the document with the provided fields from the client

        res.status(200).send(null);
      } catch (err) {
        res.status(400).send(err);
      }
      break;
  }




  
  // "POST" method
  // "PUT" method

  //   switch (method) {
  //     case "GET":
  //       try {
  //         console.log("Here we just get the post resource");
  //       } catch (err) {
  //         res.status(400).send(err);
  //       }
  //       break;
  //     case "POST":
  //       try {
  //         const newAma = new Ama({
  //           question: req.body,
  //           answer,
  //           isAnswered: False,
  //         }); // Create a new document from this model

  //         newAma.save(); // Save the document with the provided fields from the client

  //         res.status(200).send(null);
  //       } catch (err) {
  //         res.status(400).send(err);
  //       }
  //       break;
  //     case "PUT":
  //       try {
  //         console.log("Here we update the post resource");
  //       } catch (err) {
  //         res.status(400).send(err);
  //       }
  //       break;
  //   }
}
