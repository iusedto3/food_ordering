import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = () => {
const dispatch = useDispatch();
const { status, error } = useSelector((state) => state.auth);

const formik = useFormik({
initialValues: {
    email: '',
    password: ''
},
validationSchema: Yup.object({
    email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
    password: Yup.string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters')
}),
onSubmit: async (values) => {
    await dispatch(login(values));
}
});

return (
<Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
    <TextField
    fullWidth
    id="email"
    name="email"
    label="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
    sx={{ mb: 2 }}
    />
    <TextField
    fullWidth
    id="password"
    name="password"
    label="Password"
    type="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
    sx={{ mb: 2 }}
    />
    {error && (
    <Typography color="error" sx={{ mb: 2 }}>
        {error}
    </Typography>
    )}
    <Button
    type="submit"
    fullWidth
    variant="contained"
    disabled={status === 'loading'}
    sx={{ mt: 2, mb: 2 }}
    >
    {status === 'loading' ? 'Signing In...' : 'Sign In'}
    </Button>
</Box>
);
};

export default LoginForm;