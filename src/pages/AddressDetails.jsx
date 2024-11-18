import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ActionButton from "../component/ActionButton";
import IconBar from "../component/IconBar";
import PageHeader from "../component/PageHeader";
import CurrentResidence from "../component/CurrentResidence";
import PermanentResidence from "../component/ParmanentResidence";

import { FormControlLabel, Checkbox, Box } from "@mui/material";

const residenceOption = ["Owned", "Rented"];

const validationSchema = Yup.object().shape({
  currentFlat: Yup.string().required("Required"),
  currentArea: Yup.string().required("Required"),
  currentPinCode: Yup.string().required("Required"),
  currentCity: Yup.string().required("Required"),
  currentResidenceType: Yup.string().required("Required"),
  currentYearsInResidence: Yup.number()
    .typeError("Must be a number")
    .required("Required"),
  permanentFlat: Yup.string().required("Required"),
  permanentArea: Yup.string().required("Required"),
  permanentPinCode: Yup.string().required("Required"),
  permanentCity: Yup.string().required("Required"),
  permanentResidenceType: Yup.string().required("Required"),
  permanentYearsInResidence: Yup.number()
    .typeError("Must be a number")
    .required("Required"),
});

const AddressDetails = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  const navigate = useNavigate();

  const handleNextButtonClick = (isValid, isTouched) => {
    if (!isEditMode) {
      navigate("/course-details");
    } else {
      setEditMode(false)
    }
  };

  return (
    <Formik
      initialValues={{
        currentFlat: "FLAT 305, DSMAX Nayapalli",
        currentArea: "Brit Colony, Nilakantha Nagar",
        currentPinCode: "751012",
        currentCity: "Bhubaneswar",
        residence: "Rented",
        currentYearsInResidence: 3,
        permanentFlat: "FLAT 305, DSMAX Nayapalli",
        permanentArea: "Brit Colony, Nilakantha Nagar",
        permanentPinCode: "751012",
        permanentCity: "Bhubaneswar",
        permanentResidenceType: "Rented",
        permanentYearsInResidence: "3",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
        setEditMode(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            marginTop="8%"
            sx={{ maxWidth: 800, mx: "auto", position: "relative" }}
          >
            <IconBar page="address" />

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              marginTop="4%"
              border="3px solid #d4d4d4"
              borderRadius="15px 15px 50px 15px"
              backgroundColor="red"
              p={4}
              bgcolor="#f7f7ff"
              sx={{
                maxWidth: 800,
                mx: "auto",
                position: "relative",
                clipPath:
                  "polygon(100% 0, 100% 93%, 75% 93%, 75% 100%, 0 100%, 0% 60%, 0 0)",
              }}
            >
              <Box marginBottom={20} sx={{marginTop:"0px"}}>
                <PageHeader 
                  title="ADDRESS DETAILS"
                  isEditMode={isEditMode}
                  setEditMode={setEditMode}
                  
                />
                {/* Current Address Section */}
                <CurrentResidence
                  isEditMode={isEditMode}
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  residenceOption={residenceOption}
                  handleChange={handleChange}
                />
                {/* CheckBox Part */}
                <FormControlLabel
                  style={{
                    marginRight: "378px",
                    marginTop: "40px",
                    marginBottom: "35px",
                  }}
                  control={
                    <Checkbox
                    sx={{marginLeft:"-10px"}}
                      checked={sameAsPermanent}
                      onChange={(e) => {
                        setSameAsPermanent(e.target.checked);

                        if (e.target.checked) {
                          setFieldValue("permanentFlat", values.currentFlat);
                          setFieldValue("permanentArea", values.currentArea);
                          setFieldValue(
                            "permanentPinCode",
                            values.currentPinCode
                          );
                          setFieldValue("permanentCity", values.currentCity);
                          setFieldValue(
                            "permanentResidenceType",
                            values.residence
                          );
                          setFieldValue(
                            "permanentYearsInResidence",
                            values.currentYearsInResidence
                          );
                        }
                      }}
                      disabled={!isEditMode}
                    />
                  }
                  label="Current Add is  Same as Permanent Add"
                />
                {/* Permanent Address Section */}
                <PermanentResidence
                  values={values}
                  errors={errors}
                  touched={touched}
                  isEditMode={isEditMode}
                  sameAsPermanent={sameAsPermanent}
                  residenceOption={residenceOption}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  
                />
                
              </Box>
            </Box>
            {/* Submit Button */}
            <ActionButton
              onClick={handleNextButtonClick}
              isEditMode={isEditMode}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddressDetails;
