from rest_framework.test import APITestCase
from django.urls import reverse

class RegisterTest(APITestCase):
    def test_register_user(self):
        data = {'email': 'test@example.com', 'password': 'Test1234!'}
        response = self.client.post(reverse('register'), data)
        self.assertEqual(response.status_code, 201)
