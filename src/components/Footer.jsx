import React from "react"
import { Container, Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TwitterIcon from "@mui/icons-material/Twitter"
import TextField from "@mui/material/TextField"

export const Footer = () => {
  return (
    <div className="w-full bg-slate-50 mt-8 md:mt-16">
      <Container>
        <div className="pb-8 pt-16">
          <Grid
            container
            spacing={1}
            className="pl-10 md:pl-0 pb-10 border-0 border-b-2 border-solid border-slate-200"
          >
            <Grid item xs={12} md={4}>
              <div className="mt-5 md:mt-0 flex justify-start">
                <div>
                  <Link className="link" to="/">
                    <h2 className="text-orange-600 text-3xl font-semibold">FOODOFEST.</h2>
                  </Link>
                  <p className="mt-4 text-gray-600">
                    Feast on the Best with Foodofest - Delivering Deliciousness to Your Doorstep.
                  </p>
                  <div className="flex space-x-5 mt-3 md:mt-6">
                    <a className="link" href="https://www.facebook.com" target="_blank">
                      <FacebookRoundedIcon className="text-gray-600 text-4xl hover:text-orange-500" />
                    </a>
                    <a className="link" href="https://www.whatsapp.com" target="_blank">
                      <WhatsAppIcon className="text-gray-600 text-4xl hover:text-orange-500" />
                    </a>
                    <a className="link" href="https://www.twitter.com" target="_blank">
                      <TwitterIcon className="text-gray-600 text-4xl hover:text-orange-500" />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2}>
              <div className="mt-5 md:mt-0 flex justify-start md:justify-center">
                <div>
                  <h3>About</h3>
                  <p className="cursor-pointer text-gray-600 mt-3 md:mt-5">Company</p>
                  <p className="cursor-pointer text-gray-600 mt-2">Team</p>
                  <p className="cursor-pointer text-gray-600 mt-2">Career</p>
                  <p className="cursor-pointer text-gray-600 mt-2">Blog</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2}>
              <div className="mt-5 md:mt-0 flex justify-start md:justify-center">
                <div>
                  <h3>Contact</h3>
                  <p className="cursor-pointer text-gray-600 mt-3 md:mt-5">Help Center</p>
                  <p className="cursor-pointer text-gray-600 mt-2">Compliant Call</p>
                  <p className="cursor-pointer text-gray-600 mt-2">FAQ Session</p>
                  <p className="cursor-pointer text-gray-600 mt-2">Privacy Policy</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="mt-8 md:mt-0 flex justify-start md:justify-center">
                <div>
                  <h3>Subscribe Our Newsletter</h3>
                  <div className="mt-4 md:mt-6">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="contained"
                      size="large"
                      className="rounded-lg w-full"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#f97316",
                        },
                      }}
                    >
                      Submit Now
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="pt-8 flex justify-center items-center">
            <p className="text-gray-600 text-[1.1rem] md:text-xl">
              <div className="flex items-center space-x-1">
                <span className="block text-2xl">&copy;</span>{" "}
                <span className="block">2023 FoodoFest All Rights Reserved.</span>
              </div>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
