import 'package:flutter/material.dart';

void showSnachBar(BuildContext context, String text) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(text),
    ),
   );
}
