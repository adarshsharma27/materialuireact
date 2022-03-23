import React from "react";
import { Typography, Grid, Container, Button, TextField, Checkbox, Hidden } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import SideNav from "./SideNav";
import { motion } from "framer-motion";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const useStyles = makeStyles({
    conatainer: {
        boxShadow: "0 5px 30px 0 rgb(0 0 0 / 8%)",
        padding: "20px",
        margin: "40px auto",
        background: "#27293d",
    },
    inputs: {
        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
        width: "100%",
        marginBottom: "1rem",
    },
    radio: {
        flexDirection: "row",
        paddingBottom: "5px",
    },
    btn: {
        display: "block",
        color: "#fff",
        // backgroundColor:'#32B768',
        padding: "14px",
        width: "50%",
        margin: "10px 0px",
    },
    textcolor: {
        color: "#fff!important",
    },
});

const ContactUs = () => {
    const classes = useStyles();
    const phoneRegExp = /^[0-9]*$/;
    let schemaFormValidation = yup.object().shape({
        name: yup.string().required("Enter Name").max(20),
        email: yup.string().required("Enter Email").email(),
        mobile: yup.string().required("Enter Mobile Number").matches(phoneRegExp, "Enter Mobile Number").min(10).max(10),
        city: yup.string().required("Enter city").max(10),
        gender: yup.string().required("Select Gender"),
        birthday: yup.string().required("Enter Birthday"),
        age: yup.string().required("Select Age"),
    });
    const sendEmail = (values) => {
        emailjs.send("service_m82f4e4", "template_jonapbl", values, "user_f6gXGT6VCtJRanQ6uBJA5").then(
            () => {
                console.log(values);
                toast.success("Successfully Submitted", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            () => {
                toast.error("Something Went Wrong", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        );
        //   e.target.reset();
    };
    return (
        <>
            <Grid container justifyContent="center">
                <Hidden smDown>
                    <Grid item xs={12} md={2}>
                        <SideNav />
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={10} style={{ padding: "20px" }}>
                    <motion.div animate={{ y: 20 }} transition={{ duration: 2 }}>
                        <Container className={classes.conatainer}>
                            <Typography gutterBottom variant="h2" component="h2" style={{ fontSize: "1.8rem", color: "hsla(0,0%,100%,.8)" }}>
                                Contact Us
                            </Typography>
                            <Formik
                                initialValues={{ name: "", email: "", mobile: "", city: "", gender: "", age: "", birthday: "", checkbox: false }}
                                validationSchema={schemaFormValidation}
                                onSubmit={(values, { resetForm }) => {
                                    sendEmail(values);
                                    resetForm();
                                }}
                            >
                                <Form>
                                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                                        <Grid item xs={12} md={6}>
                                            <Field as={TextField} type="text" id="outlined-basic" label="Name" name="name" variant="outlined" className={clsx(classes.inputs, classes.textcolor)} />
                                            <p className="text-red-500">
                                                <ErrorMessage name="name" />
                                            </p>
                                            <Field as={TextField} type="text" id="outlined-basic" label="Email" name="email" variant="outlined" className={classes.inputs} />
                                            <p className="text-red-500">
                                                <ErrorMessage name="email" />
                                            </p>
                                            <Field as={TextField} type="text" id="outlined-basic" label="Mobile" name="mobile" variant="outlined" className={classes.inputs} />
                                            <p className="text-red-500">
                                                <ErrorMessage name="mobile" />
                                            </p>
                                            <Field as={TextField} type="text" id="outlined-basic" label="City" name="city" variant="outlined" className={classes.inputs} />
                                            <p className="text-red-500">
                                                <ErrorMessage name="city" />
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl component="fieldset" className={classes.radio}>
                                                <FormLabel component="legend" className={classes.textcolor}>
                                                    Gender
                                                </FormLabel>
                                                <Field as={RadioGroup} aria-label="gender" name="gender1" className={classes.radio}>
                                                    <Tooltip title="Female" placement="top" arrow TransitionComponent={Zoom} className={classes.tooltip}>
                                                        <FormControlLabel value="female" control={<Radio />} label="Female" name="gender" />
                                                    </Tooltip>
                                                    <Tooltip title="Male" placement="top" TransitionComponent={Zoom} arrow>
                                                        <FormControlLabel value="male" control={<Radio />} label="Male" name="gender" />
                                                    </Tooltip>
                                                    <Tooltip title="Other" placement="top" TransitionComponent={Zoom} arrow>
                                                        <FormControlLabel value="other" control={<Radio />} label="Other" name="gender" />
                                                    </Tooltip>
                                                </Field>
                                            </FormControl>
                                            <p className="text-red-500">
                                                <ErrorMessage name="gender" />
                                            </p>
                                            <FormControl variant="outlined" className={classes.inputs}>
                                                <InputLabel id="demo-simple-select-outlined-label" className={classes.textcolor}>
                                                    Age
                                                </InputLabel>
                                                <Field as={Select} labelId="demo-simple-select-outlined-label" name="age" id="demo-simple-select-outlined" label="Age">
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Field>
                                            </FormControl>
                                            <p className="text-red-500">
                                                <ErrorMessage name="age" />
                                            </p>
                                            <Field
                                                as={TextField}
                                                id="date"
                                                label="Birthday"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                variant="outlined"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputs}
                                                name="birthday"
                                            />
                                            <p className="text-red-500">
                                                <ErrorMessage name="birthday" />
                                            </p>
                                            <FormControlLabel control={<Field name="checkbox" as={Checkbox} color="primary" />} label="Start" labelPlacement="right" />
                                            <div>
                                                <Button type="submit" variant="contained" className={classes.btn} color="primary">
                                                    Submit
                                                </Button>
                                            </div>
                                        </Grid>
                                        <ToastContainer />
                                    </Grid>
                                </Form>
                            </Formik>
                        </Container>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactUs;
