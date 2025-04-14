
/**
 * @jest-environment jsdom
 * 
 * This file contains tests for the EmojiScale component.
 * To run these tests, execute: npm test
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmojiScale from './EmojiScale';

// Note: This is a sample test file that would work with Jest and React Testing Library.
// The actual test implementation would depend on the testing framework set up in the project.

describe('EmojiScale', () => {
  const mockOnSelection = jest.fn();
  
  beforeEach(() => {
    mockOnSelection.mockClear();
  });

  test('renders the component with default props', () => {
    render(<EmojiScale />);
    
    // Check if title and question are rendered
    expect(screen.getByText('Wellbeing Check-in')).toBeInTheDocument();
    expect(screen.getByText('Hello! How are you feeling today?')).toBeInTheDocument();
    
    // Check if all default emoji options are rendered
    expect(screen.getByText('Terrible')).toBeInTheDocument();
    expect(screen.getByText('Bad')).toBeInTheDocument();
    expect(screen.getByText('Alright')).toBeInTheDocument();
    expect(screen.getByText('Pretty Good')).toBeInTheDocument();
    expect(screen.getByText('Fantastic')).toBeInTheDocument();
    
    // Check if continue button is initially disabled
    const continueButton = screen.getByText('Continue');
    expect(continueButton).toBeInTheDocument();
    expect(continueButton).toBeDisabled();
  });

  test('allows selecting an emoji option', async () => {
    render(<EmojiScale />);
    
    // Get the "Fantastic" option and click it
    const fantasticOption = screen.getByTestId('emoji-option-fantastic');
    await userEvent.click(fantasticOption);
    
    // Continue button should be enabled after selection
    const continueButton = screen.getByText('Continue');
    expect(continueButton).not.toBeDisabled();
  });

  test('calls onSelection callback when continue is clicked', async () => {
    render(<EmojiScale onSelection={mockOnSelection} />);
    
    // Select an option
    const goodOption = screen.getByTestId('emoji-option-pretty_good');
    await userEvent.click(goodOption);
    
    // Click continue
    const continueButton = screen.getByText('Continue');
    await userEvent.click(continueButton);
    
    // Check if callback was called with correct value
    expect(mockOnSelection).toHaveBeenCalledTimes(1);
    expect(mockOnSelection).toHaveBeenCalledWith('pretty_good');
  });

  test('renders with custom props', () => {
    const customOptions = [
      { emoji: "🌧️", label: "Stormy", color: "#6B7280", value: "stormy" },
      { emoji: "☀️", label: "Sunny", color: "#FBBF24", value: "sunny" }
    ];
    
    render(
      <EmojiScale 
        options={customOptions}
        title="Weather Check"
        question="How's the weather?"
        submitLabel="Submit"
      />
    );
    
    // Check custom title and question
    expect(screen.getByText('Weather Check')).toBeInTheDocument();
    expect(screen.getByText("How's the weather?")).toBeInTheDocument();
    
    // Check custom options
    expect(screen.getByText('Stormy')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    
    // Check custom submit button
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('switches selection when a different emoji is clicked', async () => {
    render(<EmojiScale />);
    
    // First, select "Bad"
    const badOption = screen.getByTestId('emoji-option-bad');
    await userEvent.click(badOption);
    
    // Then, select "Fantastic"
    const fantasticOption = screen.getByTestId('emoji-option-fantastic');
    await userEvent.click(fantasticOption);
    
    // Click continue
    const continueButton = screen.getByText('Continue');
    await userEvent.click(continueButton);
    
    // Check that only the last selection is active
    expect(mockOnSelection).toHaveBeenCalledWith('fantastic');
  });
});
