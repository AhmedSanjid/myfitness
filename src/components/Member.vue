<template>

<section class="py-5">
        <div class="container text-center">
            <h2 class="mb-4">Membership Plans</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Basic Plan</h5>
                            <p class="card-text">$30/month</p>
                            <ul class="list-unstyled">
                                <li>Access to gym equipment</li>
                                <li>1 group class per week</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Premium Plan</h5>
                            <p class="card-text">$50/month</p>
                            <ul class="list-unstyled">
                                <li>Unlimited gym access</li>
                                <li>4 group classes per week</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">VIP Plan</h5>
                            <p class="card-text">$70/month</p>
                            <ul class="list-unstyled">
                                <li>Unlimited gym access</li>
                                <li>Personal trainer sessions</li>
                                <li>Specialized diet plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Membership Form</h2>
        <form>
            <div class="row mb-3">
                <div class="col">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
                </div>
                <div class="col">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" placeholder="123-456-7890" required>
            </div>
            <div class="mb-3">
                <label for="membershipType" class="form-label">Membership Type</label>
                <select class="form-select" id="membershipType" required>
                    <option value="">Select Membership Type</option>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="paymentMethod" class="form-label">Payment Method</label>
                <select class="form-select" id="paymentMethod" required>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="comments" class="form-label">Comments or Special Requests</label>
                <textarea class="form-control" id="comments" rows="3"></textarea>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms" required>
                <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</body>

    
    </template>

<script>
    export default {
    name: 'Member',
    props: {
        msg: String
    }
    }
</script>