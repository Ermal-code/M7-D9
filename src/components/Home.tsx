import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

interface ISongs {
  id: string;
  title: string;
  album: {
    cover_big: string;
    title: string;
  };
  artist: {
    name: string;
  };
  duration: number;
}

const Home = (props: RouteComponentProps) => {
  const [songs, setSongs] = useState<ISongs[]>([]);
  const [searchResult, setSearchResult] = useState<string>("");

  const fetchMusic = async (query: string) => {
    try {
      const resp = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      const songs = await resp.json();
      console.log(songs);
      if (resp.ok) {
        if (songs.error) {
          alert(`Error! Code:${songs.error.code}, ${songs.error.message}`);
        } else {
          setSongs(songs.data);
          setSearchResult("");
        }
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Jumbotron
        className="my-0"
        fluid
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/be/f1/a4/bef1a4dd9359b7ca253e5d01964ff761.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPositionY: "60%",
        }}
      >
        <Row>
          <Col
            md={{ span: 8, offset: 2 }}
            style={{
              background: "rgba(0,0,0,0.6)",
              minHeight: "400px",
              borderRadius: "25px",
            }}
          >
            <h1 className="text-light mt-4 ml-5">
              Welcome to our find music app
            </h1>
            <h4 className="text-light mt-5 ml-5">
              Here you can find everything you need and you don't even need to
              get up from your sofa.
              <br />
              Best music online can be yours within 24H. And this app is always
              open 24/7, when you want to listen something about love, when you
              want to listen something for yourself , when you want to play
              something to your dog,you can listen something even when you are
              drunk!
              <br /> <br />
              Please spend all your money here and help us be milioners and we
              won't even thank you!
            </h4>
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <div className="d-flex justify-content-center">
          <InputGroup className="my-3 w-50">
            <FormControl
              placeholder="Search Music..."
              aria-label="Search Music..."
              aria-describedby="basic-addon2"
              value={searchResult}
              onChange={(e) => setSearchResult(e.currentTarget.value)}
            />
            <InputGroup.Append>
              <Button
                variant="outline-light"
                onClick={() => fetchMusic(searchResult)}
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <Row className="mt-4">
          {songs.map((song, index) => (
            <Col
              md={4}
              lg={3}
              key={`song${index}`}
              className="mb-3"
              style={{ height: "400px" }}
            >
              <div
                className="songCard"
                style={{ position: "relative" }}
                onClick={() => props.history.push("/details/" + song.id)}
              >
                <img
                  src={song.album.cover_big}
                  height="400px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="text-light text-center"
                  style={{
                    position: "absolute",
                    top: 250,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(0,0,0,0.7)",
                  }}
                >
                  <h5>{song.title}</h5>
                  <h5>{song.album.title}</h5>
                  <h5>{song.artist.name}</h5>
                  <h5>
                    Duration{" "}
                    {(song.duration / 60)
                      .toFixed(2)
                      .toString()
                      .replace(".", ":")}
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
