import {React} from 'react'
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'
import InitialPage from './InitialPage'

afterEach(cleanup)
